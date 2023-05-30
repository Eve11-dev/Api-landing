import { Column, Entity, OneToOne,JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Landing } from '../../landing/entities/landing.entity';

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 20 })
    username: string;

    @Column()
    lastname: string;

    @Column()
    password: string;


    @Column()
    address: string;

    @OneToOne(() => Landing)
    @JoinColumn()
    Landing: Landing
    

}

