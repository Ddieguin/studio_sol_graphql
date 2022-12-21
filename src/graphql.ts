
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Rule {
    rule: string;
    value: number;
}

export class PasswordValidationResponse {
    verify: boolean;
    noMatch?: Nullable<Nullable<string>[]>;
}

export abstract class IQuery {
    abstract verify(password: string, rules?: Nullable<Rule[]>): PasswordValidationResponse | Promise<PasswordValidationResponse>;
}

type Nullable<T> = T | null;
