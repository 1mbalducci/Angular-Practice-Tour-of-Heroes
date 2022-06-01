import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
// <-- NgModel lives here
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],

  //need to add the "Forms Module" so that "ngModel" would work in HTML 
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
