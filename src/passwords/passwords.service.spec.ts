import { Test, TestingModule } from '@nestjs/testing';
import { PasswordsService } from './passwords.service';

describe('PasswordsService', () => {
  let service: PasswordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasswordsService],
    }).compile();

    service = module.get<PasswordsService>(PasswordsService);
  });

  it('should return a string array with rule that did not complete', () => {
    const rules_array = [
      { rule: 'minSize', value: 8 },
      { rule: 'minSpecialChars', value: 2 },
      { rule: 'noRepeated', value: 0 },
      { rule: 'minDigit', value: 4 },
    ];

    const noMatch_expected = ['minDigit'];

    const password_invalid = 'TesteSenhaForte!123&';

    const result = service.verify(password_invalid, rules_array);

    expect(result).toStrictEqual(noMatch_expected);
  });

  it('should return a empty array as all rules have completed', () => {
    const rules_array = [
      { rule: 'minSize', value: 8 },
      { rule: 'minSpecialChars', value: 2 },
      { rule: 'noRepeated', value: 0 },
      { rule: 'minDigit', value: 4 },
    ];

    const noMatch_expected = [];

    const password_valid = 'TestSenhaForte!12345&';

    const result = service.verify(password_valid, rules_array);

    expect(result).toStrictEqual(noMatch_expected);
  });
});
