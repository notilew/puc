import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './types/user.type';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {

    title = 'create-user-app';

    constructor(
        private userService: UserService
    ) { }

    getUsers() {
        return this.userService.getUsers();
    }

}
