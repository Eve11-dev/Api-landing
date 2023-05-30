import { Column, Entity, OneToOne,JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Landing } from '../../landing/entities/landing.entity';

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    address: string;

    @Column({type: 'boolean', default: false})
    receiveEmails: boolean;

    @Column({type: "text", nullable: true})
    fullName: string;

    @Column({ type: "text", nullable: true })
    username: string;

    @Column({ type: "text", nullable: true })
    password: string;

    @Column({type: "text", nullable: true })
    lastname: string;

    @OneToOne(() => Landing)
    @JoinColumn()
     Landing: Landing
    

}

