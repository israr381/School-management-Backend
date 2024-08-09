import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto';
import { Parent } from './entities/parent.entity';
import { Repository } from 'typeorm';
export declare class ParentsService {
    private readonly parentRepository;
    constructor(parentRepository: Repository<Parent>);
    create(createParentDto: CreateParentDto): Promise<{
        message: string;
        parent: Parent;
    }>;
    FindAllParents(): Promise<{
        message: string;
        user: Parent[];
    }>;
    findOne(id: number): string;
    update(id: number, updateParentDto: UpdateParentDto): string;
    remove(id: number): string;
}
