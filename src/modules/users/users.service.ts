import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  findAllUsers() {
    return 'This returns all users';
  }

  createUser(user: CreateUserDto) {
    console.log(user);
    return `username: ${user.username}`;
  }

  findUserById(id: string) {
    return `user with id: ${id}`;
  }
}
