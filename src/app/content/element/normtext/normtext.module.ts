import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormtextComponent } from './normtext.component';
import {EditModule} from "../../edit/edit.module";

@NgModule({
  imports: [
    CommonModule,
    EditModule
  ],
  declarations: [NormtextComponent],
  exports: [
    NormtextComponent
  ]
})
export class NormtextModule { }
