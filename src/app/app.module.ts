import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OwlModule } from 'ngx-owl-carousel';
import { HeaderModule } from './components/header/header.module';
import { KitchenMenuComponent } from './pages/kitchen-menu/kitchen-menu.component';
import { FoodModule } from './components/food/food.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    KitchenMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    HeaderModule,
    FoodModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
