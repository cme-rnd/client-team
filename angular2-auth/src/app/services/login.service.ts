import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {


    constructor(private http: Http) {
    }

    doLogin(username: string, password: string): Observable<any> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let requestOptions = new RequestOptions({headers: headers});
        let loginBodyJson = JSON.stringify({username, password});
        let restUrlLogin = 'http://localhost:8090/api/v1/auth/login';
        return this.http.post(restUrlLogin, loginBodyJson, requestOptions);
    }
}
