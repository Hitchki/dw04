import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import {EditModule} from "../edit/edit.module";
import {NormtextModule} from "../element/normtext/normtext.module";
import {SearchtreeModule} from "../element/searchtree/searchtree.module";

@NgModule({
  imports: [
    CommonModule,
    EditModule,
    NormtextModule,
    SearchtreeModule
  ],
  declarations: [MainContentComponent],
  exports: [
    MainContentComponent
  ],
})
export class MainContentModule { }
