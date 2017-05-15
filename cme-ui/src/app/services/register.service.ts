import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {User} from '../models/user';


@Injectable()
export class RegisterService {

    constructor(private http: Http, private router: Router) {
    }


    createNewAccount(user: User) {
        console.log(user);
    }
}
