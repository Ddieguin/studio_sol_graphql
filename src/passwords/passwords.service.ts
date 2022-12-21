import { Injectable } from '@nestjs/common';
import { validationFunctions } from '../utils/validation-functions';

@Injectable()
/**
 * returns { verify: boolean, noMatch: Rule[]}
 */
export class PasswordsService {
  verify(password: string, rules: Rule[]) {
    const noMatch: string[] = [];
    for (const { rule, value } of rules) {
      if (!validationFunctions[rule](password, value)) noMatch.push(rule);
    }
    return noMatch.length
      ? { verify: false, noMatch }
      : { verify: true, noMatch: [] };
  }
}

interface Rule {
  rule: string;
  value: number;
}
