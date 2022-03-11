import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { UserService } from './services/user.service';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  imports: [PrismaModule],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
