import { Subject } from './entities/subject.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from 'src/teacher/entities/teacher.entity';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subject)
    private readonly SubjectRepository: Repository<Subject>,

    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
  ){}

  async create(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    const { teacherId, ...subjectData } = createSubjectDto;
    const teacher = await this.teacherRepository.findOne({ where: { id: teacherId } });
    if (!teacher) {
      throw new NotFoundException(`Teacher with ID ${teacherId} not found`);
    }
    const subject = this.SubjectRepository.create({ ...subjectData, teacher });
    return this.SubjectRepository.save(subject);
  }




  async remove(id: number): Promise<void> {
    await this.SubjectRepository.delete(id);
  }
  

  async findAll(): Promise<Subject[]> {
    return this.SubjectRepository.find({ relations: ['teacher'] });
  }

}
