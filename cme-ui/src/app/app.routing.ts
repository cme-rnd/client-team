import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AdminComponent} from './authenticated/admin/admin.component';
import {UserComponent} from './authenticated/user/user.component';

const appRoutes: Routes = [
    {path: '', component: AppComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'user', component: UserComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
