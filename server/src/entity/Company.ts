// The company entity ( company has many wilders, a wilder belongs to one company)
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Wilder } from "./Wilder";

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Wilder, (wilder: Wilder) => wilder.company)
  wilders: Wilder[];
}
