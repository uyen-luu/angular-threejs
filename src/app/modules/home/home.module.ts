import { RobotComponent } from './components/robot/robot.component';
import { ThemeModule } from './../../theme/theme.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { customerFeatureKey, reducer } from './store/reducer/customer.reducer';
import {
  AnimationKeyframesComponent,
  AnimationSkinningBlendingComponent,
  AnimationSkinningAdditiveBlendingComponent,
  AnimationSkinningMorphComponent,
  AnimationMultipleComponent,
  AnimationComponent,
} from './components';

//#region Components
const COMPONENTS = [
  HomeComponent,
  AnimationKeyframesComponent,
  AnimationSkinningBlendingComponent,
  AnimationSkinningAdditiveBlendingComponent,
  AnimationSkinningMorphComponent,
  AnimationMultipleComponent,
  AnimationComponent,
  RobotComponent
];
//#endregion

//#region Routes
const ROUTERS = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'animation-keyframes', pathMatch: 'full' },
      {
        path: 'animation-keyframes',
        component: AnimationKeyframesComponent,
      },
      {
        path: 'animation-skinning-blending',
        component: AnimationSkinningBlendingComponent,
      },
      {
        path: 'animation-skinning-additive-blending',
        component: AnimationSkinningAdditiveBlendingComponent,
      },
      {
        path: 'second-form',
        component: AnimationSkinningMorphComponent,
      },
      {
        path: 'animation-multiple',
        component: AnimationMultipleComponent,
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
