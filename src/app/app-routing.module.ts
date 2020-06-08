import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // 路由实现模块懒加载
  {
    path: 'user',
    loadChildren: './modules/user/user.module#UserModule'
  },
  {
    path: 'goods',
    loadChildren: './modules/goods/goods.module#GoodsModule'
  },
  {
    path: 'article',
    loadChildren: './modules/article/article.module#ArticleModule'
  },
  {
    path: '**',
    redirectTo: 'user'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
