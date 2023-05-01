import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Grade } from "./Grade";
import { Profile } from "./Profile";
import { Company } from "./Company";

@Entity()
export class Wilder {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Grade, (grade:Grade) => grade.wilder)
  grades: Grade[];

   @ManyToOne(() => Company, (company:Company) => company.wilders)
    company: Company;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile
}
