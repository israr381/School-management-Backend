import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Admin]),
    PassportModule,
    JwtModule.register({
      secret: 'YOUR_SECRET_KEY',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AdminService, GoogleStrategy],
  controllers: [AdminController],
})
export class AdminModule {}
