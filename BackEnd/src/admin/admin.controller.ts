import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { RegisterDto } from './dto/Register.dto'
import { LoginDto } from './dto/Login.dto';

@Controller('admin')
export class AdminController {
    constructor (private readonly adminservice: AdminService){
     
    }


    @Post('/login')
    async login(@Body()loginDto : LoginDto){
      return this.adminservice.login(loginDto)
    }

    @Post('/register')
    async register(@Body()registerDto : RegisterDto ){
    return this.adminservice.register(registerDto)
    }
  }
