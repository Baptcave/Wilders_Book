import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Grade } from "./Grade";

@Entity()
export class Wilder {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Grade, (grade:Grade) => grade.wilder)
  grades: Grade[];

    @Column()
    company: string;
}
