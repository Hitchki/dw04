import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoContentComponent } from './info-content.component';
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
  declarations: [InfoContentComponent],
  exports: [
    InfoContentComponent
  ],
})
export class InfoContentModule { }
