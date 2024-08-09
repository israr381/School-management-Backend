import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([Admin]),
  JwtModule.register({
    global: true,
    secret:'Test',
    signOptions: {expiresIn: '12h'},
  })],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
