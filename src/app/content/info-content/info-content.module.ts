import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoContentComponent } from './info-content.component';
import {EditModule} from "../edit/edit.module";

@NgModule({
  imports: [
    CommonModule,
    EditModule
  ],
  declarations: [InfoContentComponent],
  exports: [
    InfoContentComponent
  ],
})
export class InfoContentModule { }
