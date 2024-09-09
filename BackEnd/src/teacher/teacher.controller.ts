
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post('/create')
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.create(createTeacherDto);
  }

  @Get('/find-all')
  findAll() {
    return this.teacherService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.teacherService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teacherService.update(id, updateTeacherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.teacherService.remove(id);
  }
}