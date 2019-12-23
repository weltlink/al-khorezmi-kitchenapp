import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { TimeSection, Meal, MealsSection } from 'src/app/models/menu';
import { MenuService } from 'src/app/core/services/api/menu/menu.service';
import { BehaviorSubject, Observable } from 'rxjs';
import * as environment from '../../../environments/environment'
@Component({
  selector: 'app-kitchen-menu',
  templateUrl: './kitchen-menu.component.html',
  styleUrls: ['./kitchen-menu.component.css']
})
export class KitchenMenuComponent implements OnInit, AfterViewInit {

  @ViewChild('carousel', { static: false }) carousel: OwlCarousel;

  carouselOptions = {
    items: 1,
    loop: true,
    margin: 10,
    // autoplay: true,
    autoplayTimeout: 10000,
  };

  baseURL = environment.environment.apiURL;

  menuSubject = new BehaviorSubject([]);
  menu$: Observable<TimeSection[]> = this.menuSubject.asObservable();

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getTodaysMenu().subscribe(res => {
      if (res.results[0]) {
        const sections: TimeSection[] = res.results[0].sections;
        sections.forEach(section => {
          section.mealTypes = this.mapToTypes(section.dishes);
        });
        this.menuSubject.next(sections);
      }
    });
  }

  ngAfterViewInit() {
  }

  mapToTypes(dishes: Meal[]): MealsSection[] {
    const types = [];
    for (let index = 0; index < dishes.length; index++) {
      const dish = dishes[index];
      const nextDish = dishes[index + 1];
      if (index === 0) {
        const type: MealsSection = { title: dish.dish_type.name, meals: [] };
        types.push(type);
      }

      const typeIndex = types.length - 1;
      if (dish.dish_type.name === types[typeIndex].title) { types[typeIndex].meals.push(dish); }

      if ((index !== dishes.length - 1) && dish.dish_type.name !== nextDish.dish_type.name) {
        const type: MealsSection = { title: nextDish.dish_type.name, meals: [] };
        types.push(type);
      }
    }

    return types;
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
