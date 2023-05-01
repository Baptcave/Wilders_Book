import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { Wilder } from "./Wilder"

@Entity()
export class Photo {
    /* ... other columns */
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    url: string

    @Column()
    isPublished: boolean


    @ManyToOne(() => Wilder, (wilder) => wilder.photos)
    wilder: Wilder
}