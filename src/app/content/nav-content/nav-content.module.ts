import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavContentComponent } from './nav-content.component';
import {EditModule} from "../edit/edit.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    // CommonModule,

    SharedModule,
    EditModule
  ],
  declarations: [NavContentComponent],
  exports: [
    NavContentComponent
  ],
})
export class NavContentModule { }
