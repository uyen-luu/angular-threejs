
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { ThemeModule } from '../theme/theme.module';


const PROVIDERS: Provider[] = [
];

const COMPONENTS: any[] = [
];


@NgModule({
  imports: [
    ThemeModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [...PROVIDERS]
    } as ModuleWithProviders<SharedModule>;
  }
}
