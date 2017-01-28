import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedDirective } from './selected/selected.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SelectedDirective],
  exports: [
    CommonModule,
    SelectedDirective
  ]
})
export class SharedModule { }
