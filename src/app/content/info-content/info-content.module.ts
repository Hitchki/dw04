import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoContentComponent } from './info-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InfoContentComponent],
  exports: [
    InfoContentComponent
  ],
})
export class InfoContentModule { }
