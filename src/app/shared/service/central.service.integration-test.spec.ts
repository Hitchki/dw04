/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CentralService } from './central.service';
import {ContentLoadService} from "../model/content-load/content-load.service";
import {ConfigService} from "../config/config.service";
import {FirebaseService} from "../firebase/firebase.service";
import {MockdataService} from "../mockdata/mockdata.service";
import {AngularFire, AngularFireDatabase} from "angularfire2";
import {FragmentsHelpers} from "./central.service.interface";

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

  xdescribe('getNodesArrays', ()=> {
    it('should give back correct fragmentsArray - even case', inject([CentralService], (service: CentralService) => {
      let fragmentsArray = ['projects','7','subprojects','2'];
      let result: FragmentsHelpers = {nodesCons: ['projects','subprojects' ],nodesInds:[7,2]};
       expect(service.getNodesArrays(fragmentsArray)).toEqual(jasmine.objectContaining(result));
    }));

    it('should give back correct fragmentsArray - uneven case', inject([CentralService], (service: CentralService) => {
      let fragmentsArray = ['projects','7','subprojects'];
      let result: FragmentsHelpers = {nodesCons: ['projects','subprojects' ],nodesInds:[7]};
     expect(service.getNodesArrays(fragmentsArray)).toEqual(jasmine.objectContaining(result));
    }));

    it('full - even case', inject([CentralService], (service: CentralService) => {
      let fragment = 'projects/7/subprojects/2';
      let normalizedFragment = service.getNormalizedFragment(fragment);
      let fragmentsArray = service.getFragmentsArray(normalizedFragment);
      let result: FragmentsHelpers = {nodesCons: ['projects','subprojects' ],nodesInds:[7,2]};
      expect(service.getNodesArrays(fragmentsArray)).toEqual(jasmine.objectContaining(result));
    }));

    it('full - uneven case', inject([CentralService], (service: CentralService) => {
      let fragment = 'projects/7/subprojects';
      let normalizedFragment = service.getNormalizedFragment(fragment);
      let fragmentsArray = service.getFragmentsArray(normalizedFragment);
      let result: FragmentsHelpers = {nodesCons: ['projects','subprojects' ],nodesInds:[7]};
      expect(service.getNodesArrays(fragmentsArray)).toEqual(jasmine.objectContaining(result));
    }));
  });

});