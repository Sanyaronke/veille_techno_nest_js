import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
      UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'heroku_59fc92bfc06b38b',
      port: 3306,
      username: 'bd30751719dba5',
      database: 'ffa93e92624d8e1',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
  ]
})
export class AppModule {}
