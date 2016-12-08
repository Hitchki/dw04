/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProjectsService } from './projects.service';
import {ConfigService} from "../../config/config.service";

describe('ProjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsService, ConfigService]
    });
    let configService = TestBed.get(ConfigService);
  });

  xit('should ...', inject([ProjectsService], (service: ProjectsService) => {
    expect(service).toBeTruthy();
  }));

  xit('should ...', inject([ProjectsService, ConfigService], (service: ProjectsService, configService: ConfigService) => {
    console.log('configService', configService);
    expect(service).toBeTruthy();
  }));
});
