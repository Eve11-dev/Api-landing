import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";


@Entity({ name: "client" })

export class Client{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    phone: number;



}