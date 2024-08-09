import { Parent } from './../parents/entities/parent.entity';
import { Injectable } from '@nestjs/common';
import { addStudentDto} from './dto/addStudent.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';


@Injectable()
export class StudentsService {
    
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ){}
   async create(addStudentDto: addStudentDto) {

      try {
          const addStudent = this.studentRepository.create(addStudentDto);
          await this.studentRepository.save(addStudent);
        

          return {
            message: 'Student created successfully',
            addStudent
          }
          
      } catch (error) {
          console.log(error.message);
          
      }
     
  }


  async  getrouter() {
    try {
       const user =  await this.studentRepository.find(        
        {relations: ['parent']}
       );


       return {
         message: 'All students fetched successfully',
         user
       }
    } catch (error) {
       console.log(error);
       
    }
 }

 findOne(id: number) {
   return `This action returns a #${id} student`;
 }

 update(id: number, updateStudentDto: UpdateStudentDto) {
   return `This action updates a #${id} student`;
 }

 remove(id: number) {
   return `This action removes a #${id} student`;
 }

 async findAllStudents(){
   return  this.studentRepository.find({
     relations: ['parent']
   });
 }}