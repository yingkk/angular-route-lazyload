import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodsComponent } from './goods.component';

import { GoodsListComponent } from './components/goods-list/goods-list.component';
import { GoodsDetailComponent } from './components/goods-detail/goods-detail.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {
    path: '',
    component: GoodsComponent,
    children: [
      // 加载到父组件 ip+port/goods/list  有加载GoodsComponent
      {
        path: 'list',
        component: GoodsListComponent
      },
      {
        path: 'detail',
        component: GoodsDetailComponent
      }
    ]
  },
  // 加载到根组件  ip+port/goods/car  没有加载GoodsComponent
  {
    path: 'car',
    component: CarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsRoutingModule { }
