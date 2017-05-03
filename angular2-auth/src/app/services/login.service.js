"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.doLogin = function (username, password) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var requestOptions = new http_1.RequestOptions({ headers: headers });
        var loginBodyJson = JSON.stringify({ username: username, password: password });
        var restUrlLogin = 'http://localhost:8090/api/v1/auth/login';
        return this.http.post(restUrlLogin, loginBodyJson, requestOptions);
    };
    LoginService = __decorate([
        core_1.Injectable()
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
