import { Subject } from './entities/subject.entity';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { Repository } from 'typeorm';
import { Teacher } from 'src/teacher/entities/teacher.entity';
export declare class SubjectsService {
    private readonly SubjectRepository;
    private readonly teacherRepository;
    constructor(SubjectRepository: Repository<Subject>, teacherRepository: Repository<Teacher>);
    create(createSubjectDto: CreateSubjectDto): Promise<Subject>;
    remove(id: number): Promise<void>;
    findAll(): Promise<Subject[]>;
}
