import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BarComponent } from './bar.component';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '', component: BarComponent,
    }])
  ],
  declarations: [
    BarComponent
  ],
})
export class BarModule {}
