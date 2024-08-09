import { Parent } from "src/parents/entities/parent.entity";
export declare class Student {
    id: number;
    name: string;
    gender: string;
    class: string;
    dateOfBirth: string;
    bloodGroup: string;
    religion: string;
    admissionDate: string;
    parentId: number;
    parent: Parent;
}
