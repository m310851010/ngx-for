import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFor } from './ngx-for.directive';

@NgModule({
  exports: [NgxFor],
  declarations: [NgxFor],
  imports: [CommonModule]
})
export class NgxForModule {}
