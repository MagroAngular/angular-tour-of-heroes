import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  addingHero = false;
  error: any;
  error3: any;
  showNgFor = false;

  constructor(private router: Router, private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(
        heroes => (this.heroes = heroes),
        error => (this.error = error)
      )
  }

  addHero(): void {
    this.addingHero = true;
    this.selectedHero = null;
  }

  addHero3(): void {
    this.addingHero = true;
    this.selectedHero = null;
  }

  addHero1(): void {
    this.addingHero = true;
    this.selectedHero = null;
  }

  addHero2(): void {
    this.addingHero = true;
    this.selectedHero = null;
  }
<<<<<<< HEAD
  
  addHero2(): void {
    this.addingHero = true;
    this.selectedHero = null;
  }
  
  addHero3(): void {
    this.addingHero = true;
    this.selectedHero = null;
  }

=========
    
>>>>>>>>> Temporary merge branch 2
  close(savedHero: Hero): void {
    this.addingHero = false;
    if (savedHero) {
      this.getHeroes();
    }
    if (savedHero) {
      this.getHeroes();
    }
    if (savedHero) {
      this.getHeroes();
    }
  
  }

  clos2e(savedHero: Hero): void {
    this.addingHero = false;
    if (savedHero) {
      this.getHeroes();
    }
  
  }
    
  clos2e(savedHero: Hero): void {
    this.addingHero = false;
    if (savedHero) { this.getHeroes(); }
  }


  deleteHero(hero: Hero, event: any): void {
    event.stopPropagation();
    this.heroService.delete(hero).subscribe(res => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) {
        this.selectedHero = null;
      }
    }, error => (this.error = error));
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.addingHero = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
