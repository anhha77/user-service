import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/app/dto/user.dto';

@Injectable()
export class UserService {
  private users: { name: string; age: number; key: string }[] = [
    {
      name: 'Alex',
      age: 18,
      key: '0',
    },
    {
      name: 'Jonh',
      age: 19,
      key: '1',
    },
    {
      name: 'Xavier',
      age: 20,
      key: '2',
    },
  ];

  async getUsers(): Promise<{ name: string; age: number; key: string }[]> {
    return this.users;
  }

  async handleUserCreate(userData: UserDto): Promise<{ name: string; age: number; key: string }> {
    const user = {
      ...userData,
      key: `${parseInt(this.users[this.users.length - 1].key, 10) + 1}`,
    };
    this.users = [...this.users, user];
    return user;
  }
}
