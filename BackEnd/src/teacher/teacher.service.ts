import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
  ){}

  async create(createTeacherDto: CreateTeacherDto) {
    try {
      const addTeacher = this.teacherRepository.create(createTeacherDto);
      await this.teacherRepository.save(addTeacher);

      return {
        message: 'Teacher created successfully',
        addTeacher
      };
    } catch (error) {
      console.log(error.message);
    }
  }

  async findAll(): Promise<Teacher[]> {
    return this.teacherRepository.find({ relations: ['subjects'] });
  }

  async findOne(id: number) {
    return await this.teacherRepository.findOne({ where: { id } });
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    await this.teacherRepository.update(id, updateTeacherDto);
    const updatedTeacher = await this.teacherRepository.findOne({ where: { id } });
    if (updatedTeacher) {
      return {
        message: 'Teacher updated successfully',
        updatedTeacher
      };
    } else {
      throw new Error('Teacher not found');
    }
  }

  async remove(id: number) {
    const deleteResponse = await this.teacherRepository.delete(id);
    if (deleteResponse.affected > 0) {
      return {
        message: 'Teacher deleted successfully'
      };
    } else {
      throw new Error('Teacher not found');
    }
  }
}
