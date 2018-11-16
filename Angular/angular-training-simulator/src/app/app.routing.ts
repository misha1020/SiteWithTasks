import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { AuthGuard } from './_guards';
import { OverviewComponent } from './overview';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent, outlet: "auth" },
    { path: 'register', component: RegisterComponent, outlet: "auth" },

    { path: '', component: ProblemListComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
	{ path: 'overview', component: OverviewComponent}
];

export const routing = RouterModule.forRoot(appRoutes);