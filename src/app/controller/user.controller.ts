import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from 'src/domain/user/user.service';
import { UserDto } from '../dto/user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('get-user')
  async getUsers(): Promise<{ name: string; age: number; key: string }[]> {
    return await this.userService.getUsers();
  }

  @MessagePattern('create-user')
  async handleCreateUser(@Payload() userData: UserDto): Promise<{ name: string; age: number; key: string }> {
    return await this.userService.handleUserCreate(userData);
  }
}
