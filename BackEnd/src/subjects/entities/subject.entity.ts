import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @Column()
  Classes: string;

  @Column()
  Days: string;



  @ManyToOne(() => Teacher, teacher => teacher.subjects)
  teacher: Teacher;


}
