import { Column, PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn } from "typeorm";
import { Store } from '../../store/entities/store.entity';


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

    @OneToOne(() => Store)
    @JoinColumn()
     Store: Store
}