import { Body, Controller, Delete, Get, Param, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { RegisterDto } from './dto/Register.dto';
import { LoginDto } from './dto/Login.dto';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';  

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    return this.adminService.login(loginDto);
  }

  @Post('/register')
  async register(@Body() registerDto: RegisterDto) {
    return this.adminService.register(registerDto);
  }


  @Get('/all')
  async findAll() {
    return this.adminService.findAll();
  }

  @Post('/logout')
  async logout() {
    return this.adminService.logout();
  }

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}



  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return this.adminService.delete(id);
  }
  @Post('auth/google/callback')
  async googleLogin(@Body() userProfile: any, @Res() res: Response) {
    try {
      const user = await this.adminService.googleLogin(userProfile);  
      
      if (user && user.access_token) {
        return res.status(200).json(user);
      } else {
        return res.status(401).json({ message: 'Google login failed' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Server error', error });
    }
  }


  @Get('find/:id')
  async findById(@Param('id') id: string) {
    return this.adminService.findById(id);
  }

}
