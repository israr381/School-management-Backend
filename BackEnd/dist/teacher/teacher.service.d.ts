import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';
import { Repository } from 'typeorm';
export declare class TeacherService {
    private readonly teacherRepository;
    constructor(teacherRepository: Repository<Teacher>);
    create(createTeacherDto: CreateTeacherDto): Promise<{
        message: string;
        addTeacher: Teacher;
    }>;
    findAll(): Promise<Teacher[]>;
    findOne(id: number): Promise<Teacher>;
    update(id: number, updateTeacherDto: UpdateTeacherDto): Promise<{
        message: string;
        updatedTeacher: Teacher;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
