import { Module } from '@nestjs/common';
import { PasswordResolver } from './passwords.resolver';
import { PasswordsService } from './passwords.service';

@Module({
  providers: [PasswordsService, PasswordResolver],
})
export class PasswordsModule {}
