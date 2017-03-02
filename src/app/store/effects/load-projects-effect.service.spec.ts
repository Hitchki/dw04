/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoadProjectsEffectService } from './load-projects-effect.service';

describe('LoadProjectsEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadProjectsEffectService]
    });
  });

  it('should ...', inject([LoadProjectsEffectService], (service: LoadProjectsEffectService) => {
    expect(service).toBeTruthy();
  }));
});
