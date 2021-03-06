import { Injectable } from '@angular/core';
import {Hero} from './hero';
import { HEROES } from './mock-heroes';
//below is not needed to display the JSON in the front end
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  //this returns the mock-heroes.ts file that lives in the application. We could use this to return our game.json file
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
