import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeaderComponent } from './header/header.component';
import { ProblemComponent } from './problem/problem.component';
import { BottomComponent } from './bottom/bottom.component';
import { SearchComponent } from './search/search.component';
import { routing }        from './app.routing';

import { AlertComponent, ModalComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService, ModalService, ProblemService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { OverviewComponent } from './overview';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from  '@angular/fire/database';
import { AngularFirestoreModule } from  '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { ProblemListComponent } from './problem-list/problem-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HeaderComponent,
    ProblemComponent,
    BottomComponent,
    SearchComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
	  ModalComponent,
	  OverviewComponent,
	  ProblemListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
	  AngularFireModule.initializeApp(environment.firebase),
	  AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    routing
  ],
  providers: [
	AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    ModalService,
    ProblemService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
