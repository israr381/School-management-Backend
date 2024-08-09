import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { addStudentDto} from './dto/addStudent.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post('/create')
  create(@Body() addStudentDto: addStudentDto) {
    return this.studentsService.create(addStudentDto);
  }

  @Get()
  getrouter(){
   return this.studentsService.getrouter()
  }

  
}
