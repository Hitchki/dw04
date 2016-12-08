/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContentNodesService } from './content-nodes.service';

describe('ContentNodesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentNodesService]
    });
  });

  it('should ...', inject([ContentNodesService], (service: ContentNodesService) => {
    expect(service).toBeTruthy();
  }));
});
