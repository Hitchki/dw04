import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavContentComponent } from './nav-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavContentComponent],
  exports: [
    NavContentComponent
  ],
})
export class NavContentModule { }
