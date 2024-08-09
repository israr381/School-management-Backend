import { addStudentDto } from './addStudent.dto';
declare const UpdateStudentDto_base: import("@nestjs/mapped-types").MappedType<Partial<addStudentDto>>;
export declare class UpdateStudentDto extends UpdateStudentDto_base {
    name?: string;
    gender?: string;
    class?: string;
    dateOfBirth?: string;
    bloodGroup?: string;
    religion?: string;
    admissionDate?: string;
}
export {};
