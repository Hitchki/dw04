import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchtreeComponent } from './searchtree.component';
import {EditModule} from "../../edit/edit.module";

@NgModule({
  imports: [
    CommonModule,
    EditModule
  ],
  declarations: [SearchtreeComponent],
  exports: [
    SearchtreeComponent
  ]
})
export class SearchtreeModule { }
