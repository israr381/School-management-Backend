import { Injectable } from '@nestjs/common';
import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Parent } from './entities/parent.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ParentsService {

  constructor(
    @InjectRepository(Parent)
     private readonly parentRepository: Repository<Parent>,
  ) {}
  async create(createParentDto: CreateParentDto) {
     try {

        const parent = this.parentRepository.create(createParentDto);
          await  this.parentRepository.save(parent);

            return {
              message: 'Parent created successfully',
              parent
            }
        
      } catch (error) {
          console.log(error.message);
          
      }
  }

  async  FindAllParents() {
    try {
       const user =  await this.parentRepository.find({});


       return {
         message: 'All Parents fetched successfully',
         user
       }
    } catch (error) {
     console.log(error.message)
    }
 }

  findOne(id: number) {
    return `This action returns a #${id} parent`;
  }

  update(id: number, updateParentDto: UpdateParentDto) {
    return `This action updates a #${id} parent`;
  }

  remove(id: number) {
    return `This action removes a #${id} parent`;
  }

}