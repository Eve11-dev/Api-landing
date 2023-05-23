import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LandingModule } from './landing/landing.module'; 


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Ec915810',
      database: 'landing-ng',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    LandingModule, 
    
  ],
  //controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

