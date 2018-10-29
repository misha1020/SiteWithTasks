import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeaderComponent } from './header/header.component';
import { ProblemComponent } from './problem/problem.component';
import { SertchComponent } from './sertch/sertch.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HeaderComponent,
    ProblemComponent,
    SertchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
