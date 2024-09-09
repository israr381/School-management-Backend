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
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    try {
      const user = await this.adminRepository.save({
        name: registerDto.name,
        email: registerDto.email,
        password: await bcrypt.hash(registerDto.password, 10),
      });

      if (!user) {
        throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
      }

      const payload = {
        id: user.id,
      };
      const access_token = await this.jwtService.signAsync(payload);

      return {
        message: 'User registered successfully',
        result: {
          user,
          access_token,
        },
      };
    } catch (error) {
      throw new HttpException(error.message, error.STATUS_CODES);
    }
  }

  async login(loginDto: LoginDto) {
    try {
      const user = await this.adminRepository.findOne({
        where: { email: loginDto.email },
      });

      if (!user) {
        throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
      }

      const compare = await bcrypt.compare(loginDto.password, user.password);

      if (!compare) {
        throw new HttpException('Password is incorrect', HttpStatus.BAD_REQUEST);
      }

      const payload = {
        id: user.id,
      };

      const access_token = await this.jwtService.signAsync(payload);

      return {
        Message: 'Admin Login Successfully',
        result: {
          user,
          access_token,
        },
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async logout() {
    return { message: 'Logged out successfully' };
  }



  async findAll(){
    return this.adminRepository.find()
  }




  async delete(id: string) {
    const user = await this.adminRepository.findOne({ where: { id } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    await this.adminRepository.remove(user);

    return { message: 'User deleted successfully' };
  }

  
  
  generateRandomId(): string {
    return Math.random().toString(36).substring(2, 10);
  }

  async googleLogin(req) {
    try {
      const { id, name, email, photo } = req;  
      if (!email) {
        throw new Error('Email is required');
      }
  
      let user = await this.adminRepository.findOne({ where: { email } });
  
      if (!user) {

        user = this.adminRepository.create({
          id,  
          name,
          email,
          photo,
        });
        await this.adminRepository.save(user);
      }
  
      const payload = { id: user.id };
      const access_token = await this.jwtService.signAsync(payload);
  
      return {
        message: 'User login successful',
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          photo: user.photo,
        },
        access_token,
      };
    } catch (error) {
      console.error('Google login error:', error.message);  
      throw new Error('Google login failed: ' + error.message);
    }
  }
  

  async findById(id: string): Promise<Admin> {
    const user = await this.adminRepository.findOne({ where: { id } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }
  
}
