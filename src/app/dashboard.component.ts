import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  h3roes: Hero[] = [];
  hero3s: Hero[] = [];
  h3ro3s: Hero[] = [];
  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    let vm = this;
    vm.heroService.getHeroes()
      .subscribe(heroes => vm.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero): void {
    const link = ['/detail', hero.id];
    let vm = this;
    vm.router.navigate(link);
  }
}
