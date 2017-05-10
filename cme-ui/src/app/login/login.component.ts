import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';

@Component({
    selector: 'login-form',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    ngOnInit(): void {
    }

    constructor(private router: Router,
                private loginService: LoginService) {
    }

    doLogin() {
        this.loading = true;
        let userName = this.model.username;
        let password = this.model.password;
        let result = this.loginService.doLogin(userName, password);
        if (!result) {
            this.error = 'Username or password is incorrect';
            this.loading = false;
        }
    }
}
