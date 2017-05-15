import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RegisterService} from '../services/register.service';
import {User} from '../models/user';

@Component({
    selector: 'register-form',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {
    model: any = {};

    ngOnInit(): void {
    }

    constructor(private router: Router,
                private registerService: RegisterService) {
    }

    registerNewAccount() {
        let firstName = this.model.firstName;
        let lastName = this.model.lastName;
        let userName = this.model.username;
        let password = this.model.password;
        let user = new User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.userName = userName;
        user.password = password;
        this.registerService.createNewAccount(user);
    }
}
