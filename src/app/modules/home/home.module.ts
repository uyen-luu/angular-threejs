import { RobotComponent } from './components/robot/robot.component';
import { ThemeModule } from './../../theme/theme.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { customerFeatureKey, reducer } from './store/reducer/customer.reducer';
import {
  AnimationComponent,
  EventsComponent,
  MultiViewPostprocessingComponent,
  PlyloaderComponent,
  StateManagementComponent,
  ThreeNavToolbarComponent,
} from './components';

//#region Components
const COMPONENTS = [
  HomeComponent,
  AnimationComponent,
  RobotComponent,
  EventsComponent,
  ThreeNavToolbarComponent,
  StateManagementComponent,
  PlyloaderComponent,
  MultiViewPostprocessingComponent,
];
//#endregion

//#region Routes
const ROUTERS = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'animation', pathMatch: 'full' },
      {
        path: 'animation',
        component: AnimationComponent,
      },
      {
        path: 'events',
        component: EventsComponent,
      },
      {
        path: 'ply-loader',
        component: PlyloaderComponent,
      },
      {
        path: 'ply-loader',
        component: PlyloaderComponent,
      },
      {
        path: 'multi-view-postprocessing',
        component: MultiViewPostprocessingComponent
      },
      {
        path: 'store-examples',
        component: StateManagementComponent,
      },
    ],
  },
];
//#endregion

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ThemeModule,
    SharedModule.forRoot(),
    RouterModule.forChild(ROUTERS),
    StoreModule.forFeature(customerFeatureKey, reducer),
  ],
})
export class HomeModule {}
