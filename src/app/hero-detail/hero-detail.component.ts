import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // @Input() hero?: Hero;
  hero: Hero | undefined;

  // ActivatedRoute, HeroService, and Location services injected into the constructor, saving their values in private fields:
 //The HeroService gets hero data from the remote server and this component will use it to get the hero-to-display.
 //
 constructor(private route: ActivatedRoute,
              private location: Location,
              private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
    const id= Number(this.route.snapshot.paramMap.get('id'))
    //Route parameters are always strings. The JavaScript Number function converts the string to a number, which is what a hero id should be.
    this.heroService.getHero(id).subscribe(hero => this.hero= hero);
  }

  goBack():void {
    this.location.back();
  }

}
