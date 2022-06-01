import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//gives the Router somewhere to go once you configure the routes.
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


//This tells the router to match that URL to path: 'heroes' and display the HeroesComponent when the URL is something like localhost:4200/heroes
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  //The colon (:) character in the path indicates that :id is a placeholder for a specific hero id.
  {path: 'detail/:id', component: HeroDetailComponent}
];



//The following line adds the RouterModule to the AppRoutingModule imports array and configures it with the routes in one step by calling RouterModule.forRoot():
//The forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
