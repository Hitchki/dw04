/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContentPathService } from './content-path.service';

describe('ContentPathService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentPathService]
    });
  });

  it('should ...', inject([ContentPathService], (service: ContentPathService) => {
    expect(service).toBeTruthy();
  }));
});
