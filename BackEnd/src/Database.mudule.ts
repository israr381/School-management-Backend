
import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParentsModule } from './parents/parents.module';
import { AdminModule } from './admin/admin.module';
import { TeacherModule } from './teacher/teacher.module';
import { SubjectsModule } from './subjects/subjects.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'allgood',
      autoLoadEntities: true,
      synchronize: true, 
    }),
    
    AdminModule,
    StudentsModule,
    ParentsModule,
    TeacherModule,
    SubjectsModule
],
  controllers: [],
  providers: [],
})
export class DatabasModule {}
