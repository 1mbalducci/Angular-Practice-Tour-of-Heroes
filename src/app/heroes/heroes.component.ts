import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes //HeroService imports mock-heroes file using the get heros function which is defined in the Hero.service.ts file
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  heroes: Hero[]=[];
  constructor(private heroservice: HeroService ) { }

  getHeroes(): void {
    this.heroes = this.heroservice.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
