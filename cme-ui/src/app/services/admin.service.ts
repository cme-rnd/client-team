import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs';
import {CreateUserList, UserWrapper} from '../models/user';

@Injectable()
export class AdminService {

    constructor(private http: Http, private router: Router) {
    }

    getListUser(): Observable<UserWrapper> {
        let userResponse = new UserWrapper();
        userResponse.statusCode = 'success';
        userResponse.statusMessage = 'Get list user successful';
        userResponse.data = CreateUserList;
        return Observable.of(userResponse).map((response) => {
            return response;
        });
    }

    getUserDetailedByUserName(username: String): Observable<UserWrapper> {
        let userList = CreateUserList;
        let userWrapper = new UserWrapper();
        let userObject = userList.filter((user) => user.userName === username);
        userWrapper.statusCode = 'success';
        userWrapper.statusMessage = 'Get user detailed successful';
        userWrapper.data = userObject;
        return Observable.of(userWrapper).map((response) => {
            return response;
        });
    }
}
