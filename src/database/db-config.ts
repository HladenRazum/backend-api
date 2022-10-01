import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const dbOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  database: 'learning',
  username: 'postgres',
  password: '1234',
  port: 5432,
  entities: [],
  synchronize: true,
};
