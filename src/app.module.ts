import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
      UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'heroku_59fc92bfc06b38b',
      host: 'eu-cdbr-west-02.cleardb.net',
      username: 'bd30751719dba5',
      password: 'ffa93e92624d8e1',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
  ]
})
export class AppModule {}
