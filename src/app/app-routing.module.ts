import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitchenMenuComponent } from './pages/kitchen-menu/kitchen-menu.component';


const routes: Routes = [
  {
    path: '',
    component: KitchenMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
