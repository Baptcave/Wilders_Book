import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  VersionColumn,
  VirtualColumn,
} from "typeorm";
import { Grade } from "./Grade";
import { Profile } from "./Profile";
import { Company } from "./Company";

export enum UserRole {
  ADMIN = "admin",
  EDITOR = "editor",
  GUEST = "guest",
}

@Entity()
export class Wilder {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: "varchar",
    length: 150,
  })
  name: string;

  @OneToMany(() => Grade, (grade: Grade) => grade.wilder)
  grades: Grade[];

  @ManyToOne(() => Company, (company: Company) => company.wilders)
  company: Company;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  lastUpdatedDate: Date;

  @VersionColumn()
  version: number;

  @VirtualColumn({
    query: (alias) => `SELECT COUNT("name") FROM "wilder"`,
  })
  totalWildersCount: number;
  /* Non supporté par sqlite :D
  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.GUEST,
  })
  role: UserRole;
  */
}
