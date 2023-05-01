import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Grade } from "./Grade";
import { Photo } from "./Photo";
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

    @OneToMany(() => Photo, (photo) => photo.wilder) // note: we will create author property in the Photo class below
    photos: Photo[]
}
