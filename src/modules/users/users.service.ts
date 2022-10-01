import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  findAllUsers() {
    return 'This returns all users';
  }

  createUser(user: CreateUserDto) {
    return `username: ${user.username}`;
  }

  findUserById(id: string) {
    return `user with id: ${id}`;
  }
}
