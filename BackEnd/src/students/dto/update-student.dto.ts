import { PartialType } from '@nestjs/mapped-types';
import { addStudentDto } from './addStudent.dto';

export class UpdateStudentDto extends PartialType(addStudentDto) {
    name?: string;
    gender?: string;
    class?: string;
    dateOfBirth?: string;
    bloodGroup?: string;
    religion?: string;
    admissionDate?: string; 
}
