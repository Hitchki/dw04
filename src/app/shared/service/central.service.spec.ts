/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CentralService } from './central.service';

describe('CentralService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CentralService]
    });
  });

  it('should ...', inject([CentralService], (service: CentralService) => {
    expect(service).toBeTruthy();
  }));
});
