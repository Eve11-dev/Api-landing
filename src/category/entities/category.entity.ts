import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";


@Entity({ name: "category" })

export class Category{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    descriptionProduct: string;

}