import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User | User[]> {
    return await this.usersRepository.find();
  }

  createOne(user: CreateUserDto) {
    console.log(user);
    return `username: ${user.username}`;
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }
}
