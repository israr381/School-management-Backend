import { IsString, IsDate, IsNotEmpty } from 'class-validator';

export class CreateTeacherDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsDate()
  @IsNotEmpty()
  dateOfBirth: Date;

  @IsString()
  @IsNotEmpty()
  bloodGroup: string;

  @IsString()
  @IsNotEmpty()
  religion: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsDate()
  @IsNotEmpty()
  admissionDate: Date;
}