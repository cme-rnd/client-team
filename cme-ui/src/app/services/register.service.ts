import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {User, UserWrapper} from '../models/user';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class RegisterService {

    constructor(private http: Http, private router: Router) {
    }


    createNewAccount(user: User): Observable<UserWrapper> {
        let userWrapper = new UserWrapper();
        if(user !== null) {

            userWrapper.statusCode = 'success';
            userWrapper.statusMessage = 'Create user successfully';
            userWrapper.data[0] = user;
        }
        return Observable.of(userWrapper).map((response) => {
            return response;
        });
    }
}
