/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Play3Service } from './play3.service';

xdescribe('Play3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Play3Service]
    });
  });

  it('should ...', inject([Play3Service], (service: Play3Service) => {
    expect(service).toBeTruthy();
  }));
});
