import { IsString } from 'class-validator';
import { User } from '../interfaces/user.interface';

export class CreateUserDto implements Partial<User> {
  @IsString()
  username: string;

  @IsString()
  password: string;
}
