import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input()
  get from() { return this._FROM.slice(0, -3); }
  set from(value) { this._FROM = value; }
  _FROM: string;

  @Input()
  get until(): string { return this._UNTIL.slice(0, -3); }
  set until(value) { this._UNTIL = value; }
  _UNTIL: string;
  constructor() { }

  ngOnInit() {
  }

}
