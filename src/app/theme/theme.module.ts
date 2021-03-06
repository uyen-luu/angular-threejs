
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './components/layout/layout.component';
import { SideNavToolbarComponent } from './components/side-nav-toolbar/side-nav-toolbar.component';
import { TextBoxComponent } from './components/reative-form/text-box/text-box.component';
import { AutoFocusDirective, ForbiddenValidatorDirective } from './directives';
import { DatePickerComponent } from './components/reative-form/date-picker/date-picker.component';
import { DropdownlistComponent } from './components/reative-form/dropdownlist/dropdownlist.component';
import { TooltipModule } from'ngx-bootstrap/tooltip';
import { NgxThreeModule } from 'ngx-three';

//
const BASE_MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  TooltipModule.forRoot(),
  NgxThreeModule
];

// Components for this module only
const COMPONENTS = [
  LayoutComponent,
  SideNavToolbarComponent,
  TextBoxComponent,
  DatePickerComponent,
  DropdownlistComponent
];

//
const DIRECTIVES = [
  AutoFocusDirective,
  ForbiddenValidatorDirective
];
//
const PIPES: any[] = [];

@NgModule({
  imports: [
    ...BASE_MODULES
  ],
  declarations: [
    ...DIRECTIVES,
    ...PIPES,
    ...COMPONENTS
  ],
  exports: [
    ...BASE_MODULES,
    ...DIRECTIVES,
    ...PIPES,
    ...COMPONENTS
  ]
})
export class ThemeModule {
}
