import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity({ name: "product" })
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name_product: string;

  @Column({ type: "text", nullable: true })
  quantity: number;

  @Column()
  price: number;
}
