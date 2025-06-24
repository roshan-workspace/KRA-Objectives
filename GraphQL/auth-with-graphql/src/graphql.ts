
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddUserArgs {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    role: string;
}

export interface IMutation {
    addUser(adduserArgs: AddUserArgs): User | Promise<User>;
}

export interface IQuery {
    index(): string | Promise<string>;
    login(email: string, password: string): string | Promise<string>;
    securedResourceForAdmin(): string | Promise<string>;
    securedResourceForUsers(): string | Promise<string>;
}

export interface User {
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    role: string;
}

type Nullable<T> = T | null;
