import { AutoFocusDirective } from './directives/auto-focus.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './components/layout/layout.component';
import { SideNavToolbarComponent } from './components/side-nav-toolbar/side-nav-toolbar.component';
//
const BASE_MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule
];

// Components for this module only
const COMPONENTS = [
  LayoutComponent,
  SideNavToolbarComponent
];

//
const DIRECTIVES = [
  AutoFocusDirective
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
