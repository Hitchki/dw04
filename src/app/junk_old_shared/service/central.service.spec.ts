/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CentralService } from './central.service';
import {ContentLoadService} from "../model/content-load/content-load.service";
import {ConfigService} from "../config/config.service";
import {FirebaseService} from "../firebase/firebase.service";
import {MockdataService} from "../mockdata/mockdata.service";
import {AngularFire, AngularFireDatabase} from "angularfire2";
import {FragmentsHelpers, PathNodes} from "./central.service.interface";
import {test1} from "../mockdata/testdata/test1";

class ContentLoadServiceStub {
  public config: any;
  private configService: any;
}

describe('CentralService as it is', () => {

  let contentLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CentralService,
        { provide: ContentLoadService, useClass: ContentLoadServiceStub },
      ]
    });
  });

  xit('should ...', inject([CentralService], (service: CentralService) => {
    expect(service).toBeTruthy();
  }));

  xdescribe('getNormalizedFragment', ()=> {
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

  xdescribe('getPathNodesFRA test1', ()=> {
    let nodesCons: string[];
    let nodesInds: number[];
    let dwNodes: any = test1.projects;
    it('should give back subprojects - pathNodes undefined', inject([CentralService], (service: CentralService) => {
      nodesCons = ['projects', 'subprojects'];
      nodesInds = [0,1];
      dwNodes = test1.projects;
      let result = {};
      expect(service.getPathNodesFRA(dwNodes, nodesCons, nodesInds)).toEqual(jasmine.objectContaining(result));
    }));

    xit('should give back subprojects - pathNodes defined', inject([CentralService], (service: CentralService) => {
      nodesCons = ['subprojects'];
      nodesInds = [0];
      dwNodes = test1;
      let result = null;
      let pathNodes = <PathNodes>[];
      expect(service.getPathNodesFRA(dwNodes, nodesCons, nodesInds, pathNodes)).toEqual(jasmine.objectContaining(result));
    }));
  });
});
