import { ThemeModule } from './../../theme/theme.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { customerFeatureKey, reducer } from './store/reducer/customer.reducer';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ThemeModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    StoreModule.forFeature(customerFeatureKey, reducer),
  ]
})
export class HomeModule { }
