import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormComponent } from './reactive-form.component';

@NgModule({
  declarations: [
    ReactiveFormComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReactiveFormComponent
      }
    ])
  ]
})
export class ReactiveFormModule { }
