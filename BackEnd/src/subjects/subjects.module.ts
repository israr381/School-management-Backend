import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { Subject } from './entities/subject.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from 'src/teacher/entities/teacher.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Subject, Teacher])],

  controllers: [SubjectsController],
  providers: [SubjectsService],
})
export class SubjectsModule {}
