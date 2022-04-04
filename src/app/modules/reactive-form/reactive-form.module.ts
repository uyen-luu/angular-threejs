import { ThemeModule } from './../../theme/theme.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormComponent } from './reactive-form.component';
import { ReactiveNavToolbarComponent } from './components/reactive-nav-toolbar/reactive-nav-toolbar.component';
import { FirstFormComponent } from './components/first-form/first-form.component';
import { SecondFormComponent } from './components/second-form/second-form.component';

@NgModule({
  declarations: [
    ReactiveFormComponent,
    ReactiveNavToolbarComponent,
    FirstFormComponent,
    SecondFormComponent
  ],
  imports: [
    ThemeModule,
    SharedModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: ReactiveFormComponent,
        children: [
          {path: '', redirectTo: 'first-form', pathMatch: 'full'},
          {
            path: 'first-form',
            component: FirstFormComponent
          },
          {
            path: 'second-form',
            component: SecondFormComponent
          }
        ]
      },
    ])
  ]
})
export class ReactiveFormModule { }
