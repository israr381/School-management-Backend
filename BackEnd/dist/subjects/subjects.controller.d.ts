import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
export declare class SubjectsController {
    private readonly subjectsService;
    constructor(subjectsService: SubjectsService);
    create(createSubjectDto: CreateSubjectDto): Promise<import("./entities/subject.entity").Subject>;
    remove(id: string): Promise<void>;
    findAll(): Promise<import("./entities/subject.entity").Subject[]>;
}
