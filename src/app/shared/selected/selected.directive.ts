import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[dwSelected]'
})
export class SelectedDirective {

  constructor(el: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    // renderer.setElementStyle(el.nativeElement, 'border', '3px solid yellow');
  }

}
