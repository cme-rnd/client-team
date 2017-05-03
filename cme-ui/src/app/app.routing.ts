import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AdminComponent} from './admin/admin.component';

const appRoutes: Routes = [
    {path: '', component: AppComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'admin', component: AdminComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
