/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockdataService } from './mockdata.service';
import {Http} from "@angular/http";
import {ConfigService} from "../config/config.service";

describe('MockdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockdataService, ConfigService, Http]
    });
  });

  xit('should ...', inject([MockdataService, ConfigService], (service: MockdataService, configService: ConfigService, http: Http) => {
    expect(service).toBeTruthy();
  }));
});
