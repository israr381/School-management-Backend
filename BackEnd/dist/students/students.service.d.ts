import { addStudentDto } from './dto/addStudent.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
export declare class StudentsService {
    private readonly studentRepository;
    constructor(studentRepository: Repository<Student>);
    create(addStudentDto: addStudentDto): Promise<{
        message: string;
        addStudent: Student;
    }>;
    getrouter(): Promise<{
        message: string;
        user: Student[];
    }>;
    findOne(id: number): string;
    update(id: number, updateStudentDto: UpdateStudentDto): string;
    remove(id: number): string;
    findAllStudents(): Promise<Student[]>;
}
