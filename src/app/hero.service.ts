import { Injectable } from '@angular/core';
import {Hero} from './hero';
import { HEROES } from './mock-heroes';
//below is not needed to display the JSON in the front end
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root'})
export class HeroService {

  //constructor is empty for the json to show
  //This is a typical "service-in-service" scenario: You inject the MessageService into the HeroService which is injected into the HeroesComponent.
  constructor(private messageService: MessageService) { }


  //this returns the mock-heroes.ts file that lives in the application. We could use this to return our game.json file
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  //This version of getHeroes() is used with the HTTP Client requests and would only be used if connecting data from outside sources
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id:number): Observable<Hero>{
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero= HEROES.find(h => h.id === id)!;
    //The backtick ( ` ) characters define a JavaScript template literal for embedding the id.
    this.messageService.add(`HeroService: fetched Hero id=${id}`);
    //returns a mock hero as an Observable, using the RxJS of() function.
    return of(hero);
  }
}
