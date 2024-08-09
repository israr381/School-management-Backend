import { ParentsService } from './parents.service';
import { CreateParentDto } from './dto/create-parent.dto';
export declare class ParentsController {
    private readonly parentsService;
    constructor(parentsService: ParentsService);
    create(createParentDto: CreateParentDto): Promise<{
        message: string;
        parent: import("./entities/parent.entity").Parent;
    }>;
    FindAllParents(): Promise<{
        message: string;
        user: import("./entities/parent.entity").Parent[];
    }>;
}
