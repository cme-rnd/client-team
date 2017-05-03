import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';

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
                private loginService: LoginService) {
    }

    doLogin() {
        let userName = this.model.username;
        let password = this.model.password;
        this.loginService.doLogin(userName, password);
    }
}
