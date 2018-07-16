import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigOptionsService, LocalStorageService, appInfo, APP_INFO } from './services';
import { DemoComponent } from './components/demo/demo.component';
import { ClickerDirective } from './directives/clicker.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DemoComponent,
    ClickerDirective
  ],
  providers: [
    ConfigOptionsService,
    LocalStorageService,
    {
      provide: APP_INFO,
      useValue: appInfo
    }
  ],
  exports: [DemoComponent]
})
export class CoreModule { }
