import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-food-box',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodComponent implements OnInit {

  @Input() image;
  @Input() desc;
  @Input() price;
  @Input() boxClass;
  constructor() { }

  ngOnInit() {
  }

}
