import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // 路由实现模块懒加载
  {
    path: 'user',
    // loadChildren: './modules/user/user.module#UserModule'
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'goods',
    loadChildren: () => import('./modules/goods/goods.module').then(m => m.GoodsModule)
  },
  {
    path: 'article',
    loadChildren: () => import('./modules/article/article.module').then(m => m.ArticleModule)
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
