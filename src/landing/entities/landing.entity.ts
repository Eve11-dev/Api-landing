import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";


@Entity({ name: "landing" })

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
