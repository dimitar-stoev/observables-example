import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class coreModule {
  constructor(@Optional() @SkipSelf() parentModule: coreModule) {
    if (parentModule) {
      throw new Error(
        'coreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot() {
    return {
      ngModule: coreModule,
      providers: []
    };
  }
}

