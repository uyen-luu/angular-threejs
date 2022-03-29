import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ]
})
export class HomeModule { }
