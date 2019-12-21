import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { Menu, TimeSection, Meal } from 'src/app/models/menu';

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

  menus = [
    {
      title: 'Nonushta',
      time: {
        from: '7:30',
        until: '11:00'
      },
      mealTypes: [
        {
          title: 'Bo\'tqalar',
          meals: [
            {
              title: 'Lapshali bo\'tqa',
              price: 7900,
              image: 'assets/images/nonushta/food1.png'
            },
            {
              title: 'Kahsa',
              price: 8843,
              image: 'assets/images/nonushta/botqa2.png'
            },
            {
              title: 'Sutli makaron',
              price: 2000,
              image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80'
            },
            {
              title: 'Sutli makaron',
              price: 2000,
              image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80'
            },
          ]
        },
        {
          title: 'Gosht',
          meals: [
            {
              title: 'Lapshali bo\'tqa',
              price: 7900,
              image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80'
            },
            {
              title: 'Kahsa',
              price: 8843,
              image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80'
            },
            {
              title: 'Sutli makaron',
              price: 2000,
              image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80'
            },
          ]
        },
        {
          title: 'Pishiriqlar',
          meals: [
            {
              title: 'Bulochka',
              price: 3500,
              image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80'
            },
            {
              title: 'Lapshali bo\'tqa',
              price: 7900,
              image: 'assets/images/nonushta/food1.png'
            },
          ]
        },
        {
          title: 'non',
          meals: [
            {
              title: 'Lapshali bo\'tqa',
              price: 7900,
              image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80'
            },
            {
              title: 'Kahsa',
              price: 8843,
              image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80'
            },
            {
              title: 'Sutli makaron',
              price: 2000,
              image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80'
            },
          ]
        },

      ]
    },
    {
      title: 'Obed',
      time: {
        from: '11.30',
        until: '9999'
      },
      mealTypes: [
        {
          title: 'Bo\'tqalar',
          meals: [
            {
              title: 'Lapshali bo\'tqa',
              price: 7900,
              image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80'
            },
            {
              title: 'Kahsa',
              price: 8843,
              image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80'
            },
            {
              title: 'Sutli makaron',
              price: 2000,
              image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80'
            },
          ]
        },
        {
          title: 'Pishiriqlar',
          meals: [
            {
              title: 'Bulochka',
              price: 3500,
              image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80'
            }
          ]
        }
      ]
    }
  ];

  rawmenu: TimeSection[] = [
    {
      title: 'Nonushta',
      // time: {
      from: '7:30',
      until: '11:00',
      // },
      meals: [
        {
          title: 'Lapshali bo\'tqa',
          price: 7900,
          image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80',
          type: 'non'
        },
        {
          title: 'Kahsa',
          price: 8843,
          image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80',
          type: 'non'
        },
        {
          title: 'Sutli makaron',
          price: 2000,
          image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80',
          type: 'non'
        },
        {
          title: 'Lapshali bo\'tqa',
          price: 7900,
          image: 'assets/images/nonushta/food1.png',
          type: 'Bo\'tqalar',
        },
        {
          title: 'Kahsa',
          price: 8843,
          image: 'assets/images/nonushta/botqa2.png',
          type: 'Bo\'tqalar',
        },
        {
          title: 'Sutli makaron',
          price: 2000,
          image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80',
          type: 'Bo\'tqalar',
        },
        {
          title: 'Sutli makaron',
          price: 2000,
          image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80',
          type: 'Bo\'tqalar',
        },
        {
          title: 'Lapshali bo\'tqa',
          price: 7900,
          image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80',
          type: 'Gosht'

        },
        {
          title: 'Kahsa',
          price: 8843,
          image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80',
          type: 'Gosht'
        },
        {
          title: 'Sutli makaron',
          price: 2000,
          image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80',
          type: 'Gosht'
        }
      ]
    },
    {
      title: 'Obed',
      // time: {
      from: '11.30',
      until: '9999',
      // },
      meals: [
        {
          title: 'Lapshali bo\'tqa',
          price: 7900,
          image: 'assets/images/nonushta/food1.png',
          type: 'Bo\'tqalar',
        },
        {
          title: 'Kahsa',
          price: 8843,
          image: 'assets/images/nonushta/botqa2.png',
          type: 'Bo\'tqalar',
        },
        {
          title: 'Sutli makaron',
          price: 2000,
          image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80',
          type: 'Bo\'tqalar',
        },
        {
          title: 'Sutli makaron',
          price: 2000,
          image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80',
          type: 'Bo\'tqalar',
        },
        {
          title: 'Bulochka',
          price: 3500,
          image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&fit=crop&w=1547&q=80',
          type: 'Pishiriqlar'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.carousel);
  }

  sortMenu(meals: Meal[]) {
  }

}
