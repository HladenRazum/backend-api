import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { dbOptions } from 'src/database/db-config';

@Module({
  imports: [UsersModule, BooksModule, TypeOrmModule.forRoot(dbOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
