import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  findAll() {
    return 'THESE ARE ALL THE BOOKS';
  }
}
