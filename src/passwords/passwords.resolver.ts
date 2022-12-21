import { Resolver, Args, Query } from '@nestjs/graphql';
import { PasswordValidationResponse, Rule } from 'src/graphql';
import { PasswordsService } from './passwords.service';

@Resolver()
export class PasswordResolver {
  constructor(private passwordService: PasswordsService) {}

  @Query(() => PasswordValidationResponse)
  verify(@Args('password') password: string, @Args('rules') rules: Rule[]) {
    return this.passwordService.verify(password, rules);
  }
}
