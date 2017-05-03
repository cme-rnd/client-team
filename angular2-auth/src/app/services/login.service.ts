import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {


    constructor(private http: Http) {
    }

    doLogin(username: string, password: string): Observable<any> {
        // this.doCallRestApi();
        let headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Content-Type', 'application/json');

        let requestOptions = new RequestOptions({headers: headers});
        let loginBodyJson = {username, password};
        // let restUrlLogin = 'http://localhost:8090/api/v1/auth/login';
        let restUrlLogin = 'http://localhost:8090/user/login';

        return this.http.post(restUrlLogin, loginBodyJson, requestOptions).map((response: Response) => {
            console.log(response);
            return response.json();
        });
    }

    // doCallPostRestApi(): Observable<void> {
    //     let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    //     let options = new RequestOptions({headers: headers});
    //
    //     let linkApi = 'http://localhost:1111/SpringBootRestApi/api/post/user/';
    //     let loginBodyJson = JSON.stringify({'name': 'hieu', 'age': 33, 'salary': 7777});
    //     // let linkApi = 'http://localhost:8090/user/login';
    //     // let loginBodyJson = {'userName': 'admin', 'password': 'password'};
    //     return this.http.post(linkApi, loginBodyJson, options).map((res: Response) => {
    //         console.log(res);
    //         return res.json();
    //     });
    // }

    doCallPostRestApi() {
        let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
        let options = new RequestOptions({headers: headers});

        let linkApi = 'http://localhost:1111/SpringBootRestApi/api/post/user/';
        let loginBodyJson = {'name': 'hieu', 'age': 33, 'salary': 7777};
        // let linkApi = 'http://localhost:8090/user/login';
        // let loginBodyJson = {'userName': 'admin', 'password': 'password'};
        return this.http.post(linkApi, loginBodyJson, options).map((res: Response) => {
            console.log(res);
            return res.json();
        });
    }

    doCallGetRestApi() {
        let linkApi = 'http://localhost:1111/SpringBootRestApi/api/user/';
        return this.http.get(linkApi)
            .map((res: Response) => {
                console.log(res);
                return res.json();
            }).subscribe(item => {
                console.log('subscribe item', item);
            });
    }

    doCallGetRestApiByUserId() {
        let linkApi = 'http://localhost:1111/SpringBootRestApi/api/user/1';
        return this.http.get(linkApi)
            .map((res: Response) => {
                console.log(res);
                return res.json();
            }).subscribe(item => {
                console.log('subscribe item', item);
            });
    }
}
