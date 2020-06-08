import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodsRoutingModule } from './goods-routing.module';
import { GoodsComponent } from './goods.component';
import { GoodsListComponent } from './components/goods-list/goods-list.component';
import { GoodsDetailComponent } from './components/goods-detail/goods-detail.component';
import { CarComponent } from './components/car/car.component';


@NgModule({
  declarations: [GoodsComponent, GoodsListComponent, GoodsDetailComponent, CarComponent],
  imports: [
    CommonModule,
    GoodsRoutingModule
  ]
})
export class GoodsModule { }
