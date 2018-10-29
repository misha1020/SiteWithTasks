import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeaderComponent } from './header/header.component';
import { ProblemComponent } from './problem/problem.component';
import { BottomComponent } from './bottom/bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HeaderComponent,
    ProblemComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
