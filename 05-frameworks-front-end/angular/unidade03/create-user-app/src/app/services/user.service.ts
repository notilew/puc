import { Injectable } from '@angular/core';
import { User } from '../types/user.type';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private users: User[] = [];

    constructor() { }

    addUser(user: User): void {
        if (this.users.indexOf(user) === -1) {
            this.users = this.users.concat(user);
        }
    }

    getUsers(): User[] {
        return this.users;
    }

}
