import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooComponent } from './foo.component';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '', component: FooComponent,
    }])
  ],
  declarations: [
    FooComponent
  ],
})
export class FooModule {}
