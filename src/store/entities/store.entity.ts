import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";


@Entity({ name: "store" })

export class Store {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    IDproduct: string;

    @Column()
    client: string;

    @Column()
    sale_date: string;

    @Column()
    qualityProduct: number;



}
