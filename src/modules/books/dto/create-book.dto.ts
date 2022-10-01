import { IsString } from 'class-validator';
import { Book } from '../interfaces/book.interface';

export class CreateBookDto implements Partial<Book> {
  @IsString()
  name: string;

  @IsString()
  author: string;
}
