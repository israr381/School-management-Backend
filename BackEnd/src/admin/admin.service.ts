import { LoginDto } from './dto/Login.dto';
import {JwtService} from "@nestjs/jwt"
import { HttpException, HttpStatus,  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/Register.dto';
import * as bcrypt from 'bcryptjs';
import { STATUS_CODES } from 'http';
import { error } from 'console';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
    private jwtService : JwtService
    ){}



    async register(registerDto : RegisterDto){
    try {
        const user = await this.adminRepository.save({
            name: registerDto.name,
            email: registerDto.email,
            password:  await  bcrypt.hash(registerDto.password, 10),
        }) 

        if (!user) {
          throw new HttpException('user not found', HttpStatus.BAD_REQUEST)
      }
     

        const payload = {
            id: user.id,
        }
        const access_token = await this.jwtService.signAsync(payload)
        console.log(user);
        
return { 
   message : 'user register successfully',
    result : {
      
    user,
    access_token,
  
    
    }
}
    } catch (error) {
        throw new HttpException(error.message, error.STATUS_CODES)
    }
        
    }
  




  async login(loginDto : LoginDto){
    try {
        const user = await this.adminRepository.findOne({
            where:{email:loginDto.email}
        })

        console.log(user)

        if (!user) {
            throw new HttpException('user not found', HttpStatus.BAD_REQUEST)
        }

        const compare = await bcrypt.compare(loginDto.password,user.password)

        if (compare) {
            const payload= {
                id : user.id
            } 
                if (!compare) {
                    throw new HttpException('password is incorrect', HttpStatus.BAD_REQUEST)
                }
    

            

            const access_token = await this.jwtService.signAsync(payload)

            return{

              Message : "Admin Login Successfully",
                result: {
                    user,
                    access_token
                }
            }
        }else{
            throw new HttpException('incorrecct credential', HttpStatus.BAD_REQUEST)
        }
    } catch (error) {
        throw new HttpException(error.message, error.STATUS_CODES)
    }
}
}