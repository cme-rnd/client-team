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

    ngOnInit(): void {
    }

    constructor(private router: Router,
                private loginService: LoginService) {
    }

    doLogin() {
        // let userName = this.model.username;
        // let password = this.model.password;
        // this.loginService.doLogin(userName, password);

        this.loginService.doCallPostRestApi();

        // this.loginService.doCallGetRestApi();

        // this.loginService.doCallGetRestApiByUserId();
    }
}
