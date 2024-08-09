import { StudentsService } from './students.service';
import { addStudentDto } from './dto/addStudent.dto';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    create(addStudentDto: addStudentDto): Promise<{
        message: string;
        addStudent: import("./entities/student.entity").Student;
    }>;
    getrouter(): Promise<{
        message: string;
        user: import("./entities/student.entity").Student[];
    }>;
}
