import { Injectable } from '@nestjs/common';
import { validationFunctions } from '../utils/validation-functions';

@Injectable()
export class PasswordsService {
  verify(password: string, rules: Rule[]) {
    const noMatch: string[] = [];
    for (const { rule, value } of rules) {
      try {
        if (!validationFunctions[rule](password, value)) noMatch.push(rule);
      } catch (e) {
        throw new Error('the selected rule is invalid');
      }
    }
    return noMatch;
  }
}

interface Rule {
  rule: string;
  value: number;
}
