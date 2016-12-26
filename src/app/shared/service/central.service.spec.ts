/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CentralService } from './central.service';
import {ContentLoadService} from "../model/content-load/content-load.service";
import {ConfigService} from "../config/config.service";
import {FirebaseService} from "../firebase/firebase.service";
import {MockdataService} from "../mockdata/mockdata.service";
import {AngularFire, AngularFireDatabase} from "angularfire2";

class ContentLoadServiceStub {
  public config: any;
  private configService: any;
}

describe('CentralService', () => {

  let contentLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CentralService,
        { provide: ContentLoadService, useClass: ContentLoadServiceStub },
      ]
    });
  });

  it('should ...', inject([CentralService], (service: CentralService) => {
    expect(service).toBeTruthy();
  }));

  describe('getNormalizedFragment', ()=> {
    it('should not change correct fragments', inject([CentralService], (service: CentralService) => {
      let fragment = 'franz/ulrich';
      expect(service.getNormalizedFragment(fragment)).toBe('franz/ulrich');
    }));

    it('should replace duplicate // with one /', inject([CentralService], (service: CentralService) => {
      let fragment = 'franz//ulrich';
      expect(service.getNormalizedFragment(fragment)).toBe('franz/ulrich');
    }));

    it('should replace duplicate // with one /', inject([CentralService], (service: CentralService) => {
      let fragment = 'franz///ulrich';
      expect(service.getNormalizedFragment(fragment)).toBe('franz/ulrich');
    }));

    it('should remove duplicates /// and / at the end', inject([CentralService], (service: CentralService) => {
      let fragment = 'franz///ulrich/';
      expect(service.getNormalizedFragment(fragment)).toBe('franz/ulrich');
    }));
  });



});
