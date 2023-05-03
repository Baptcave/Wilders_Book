import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Profile {
  /* ... other columns */
  @PrimaryColumn()
  id: string;

  @Column({
    nullable: true,
  })
  gender: string;

  @Column({
    nullable: true,
  })
  age: string;

  @Column({
    nullable: true,
  })
  photo_id: string;
}
