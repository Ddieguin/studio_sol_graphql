import { Resolver, Args, Query } from '@nestjs/graphql';
import { Rule } from 'src/graphql';
import { PasswordsService } from './passwords.service';

@Resolver()
export class PasswordResolver {
  constructor(private passwordService: PasswordsService) {}

  @Query()
  verify(@Args('password') password: string, @Args('rules') rules: Rule[]) {
    return this.passwordService.verify(password, rules);
  }
}
