import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from 'src/domain/user/user.service';
import { UserDto } from '../dto/user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('get-user')
  getUsers(): { name: string; age: number; key: string }[] {
    return this.userService.getUsers();
  }

  @MessagePattern('create-user')
  handleCreateUser(userData: UserDto) {
    return this.userService.handleUserCreate(userData);
  }
}
