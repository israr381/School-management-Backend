import { Subject } from '../../subjects/entities/subject.entity';
export declare class Teacher {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: Date;
    bloodGroup: string;
    religion: string;
    email: string;
    phone: string;
    address: string;
    admissionDate: Date;
    subjects: Subject[];
}
