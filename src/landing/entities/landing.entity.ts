import { Column, PrimaryGeneratedColumn } from "typeorm";



export class Landing {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    url: string;

    @Column()
    descriptionProduct: string;

    @Column()
    category: string;

    @Column()
    price: number;



}
