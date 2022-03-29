import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'reactive-form',
    loadChildren: () => import('./modules/reactive-form/reactive-form.module').then(m => m.ReactiveFormModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
