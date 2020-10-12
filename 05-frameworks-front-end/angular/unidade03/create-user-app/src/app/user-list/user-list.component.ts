import { Component, OnInit, Input } from '@angular/core';
import { User } from '../types/user.type';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    @Input() public users: User[] = [];

    constructor() { }

    ngOnInit() { }
    
}
