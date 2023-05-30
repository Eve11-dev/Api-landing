import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LandingModule } from './landing/landing.module'; 
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { Landing } from './landing/entities/landing.entity';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Ec915810',
      database: 'landing-ng',
      entities: [User, Landing],
      synchronize: true,
      autoLoadEntities: true,
    }),
    LandingModule,
    UserModule, 
    
  ],
  //controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

