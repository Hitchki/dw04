import { Injectable }    from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable }    from 'rxjs/Observable';
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate) {
    console.log('canDeactivate1');
    return component.canDeactivate ? component.canDeactivate() : true;
    // return false;
  }
}



// import { Injectable }    from '@angular/core';
// import { CanDeactivate } from '@angular/router';
//
// export interface DeactivableComponent {
//   allowLeave: () => boolean;
//   confirmText: () => string;
// }
//
// @Injectable()
// export class CanDeactivateGuard implements CanDeactivate<DeactivableComponent> {
//   canDeactivate(component: DeactivableComponent) : boolean | Promise<boolean> {
//     if (component.allowLeave()) return true;
//     var text = component.confirmText() ||
//       'Do you want to discard these changes?'
//     return new Promise<boolean>(resolve => {
//       return resolve(window.confirm(text));
//     });
//   }
// }
