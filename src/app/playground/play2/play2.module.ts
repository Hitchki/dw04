import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Play2Component } from './play2.component';
import { AngularfireObjectBindingComponent } from './angularfire-object-binding/angularfire-object-binding.component';
import { AngularfireListBindingComponent } from './angularfire-list-binding/angularfire-list-binding.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Play2Component, AngularfireObjectBindingComponent, AngularfireListBindingComponent]
})
export class Play2Module { }
