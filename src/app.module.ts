import { Module } from '@nestjs/common';
import { UserModule } from './app/module/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
