import { Module } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { UserService } from 'src/domain/user/user.service';

@Module({
  imports: [],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
