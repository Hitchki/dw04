import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import {EditModule} from "../edit/edit.module";

@NgModule({
  imports: [
    CommonModule,
    EditModule
  ],
  declarations: [MainContentComponent],
  exports: [
    MainContentComponent
  ],
})
export class MainContentModule { }
