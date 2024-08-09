import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
export declare class TeacherController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    create(createTeacherDto: CreateTeacherDto): Promise<{
        message: string;
        addTeacher: import("./entities/teacher.entity").Teacher;
    }>;
    findAll(): Promise<import("./entities/teacher.entity").Teacher[]>;
    findOne(id: number): Promise<import("./entities/teacher.entity").Teacher>;
    update(id: number, updateTeacherDto: UpdateTeacherDto): Promise<{
        message: string;
        updatedTeacher: import("./entities/teacher.entity").Teacher;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
