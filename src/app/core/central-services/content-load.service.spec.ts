/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContentLoadService } from './content-load.service';
import {FirebaseService} from "../firebase/firebase.service";
import {MockdataService} from "../mockdata/mockdata.service";
import {ConfigService} from "../config/config.service";

describe('ContentLoadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentLoadService, ConfigService, FirebaseService, MockdataService]
    });
  });

  xit('should ...', inject([ContentLoadService, ConfigService], (service: ContentLoadService,
                                                                configService: ConfigService,
                                                                firebaseService: FirebaseService,
                                                                mockdataService: MockdataService) => {
    expect(service).toBeTruthy();
  }));
});
