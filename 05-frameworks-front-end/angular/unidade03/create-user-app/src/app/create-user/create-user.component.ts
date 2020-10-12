import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

    constructor(
        private userService: UserService
    ) { }

    ngOnInit() { }

    onSubmitForm(formGroup) {
        this.userService.addUser(formGroup.value);
    }

}
