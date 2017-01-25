import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
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
