import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';

const dbOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  database: 'learning',
  username: 'postgres',
  password: '1234',
  port: 5432,
  synchronize: true,
};

@Module({
  imports: [
    UsersModule,
    BooksModule,
    TypeOrmModule.forRoot({ ...dbOptions, entities: [User] }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
