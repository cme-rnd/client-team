import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing} from './app.routing';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {LoginService} from './services/login.service';
import {AdminComponent} from './authenticated/admin/admin.component';
import {UserComponent} from './authenticated/user/user.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
    ],
    declarations: [
        RegisterComponent,
        LoginComponent,
        AppComponent,
        AdminComponent,
        UserComponent,
    ],
    providers: [
        LoginService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
