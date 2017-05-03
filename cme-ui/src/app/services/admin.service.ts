import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {UserWrapper} from '../models/user';

@Injectable()
export class AdminService {

    constructor(private http: Http, private router: Router) {
    }

    getListUser(): Observable<UserWrapper> {
        return Observable.create(new UserWrapper()).map((response: Response) => {
            console.log(response);
            return response.json();
        });
    }
}
