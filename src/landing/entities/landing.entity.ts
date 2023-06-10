import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity({ name: "landing" })
export class Landing {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  url: string;

  @Column({ type: "text" })
  descriptionProduct: string;

  @Column({ type: "text" })
  category: string;

  @Column({ type: "numeric" })
  price: number;
}
