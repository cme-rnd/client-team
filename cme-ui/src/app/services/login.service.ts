import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

    constructor(private http: Http, private router: Router) {
    }

    doLogin(username: string, password: string) {
        if ((username === password) && (username === 'admin')) {
            this.router.navigate(['/admin']);
        }

        if ((username === password) && (username === 'user')) {
            this.router.navigate(['/user']);
        }
    }
}
