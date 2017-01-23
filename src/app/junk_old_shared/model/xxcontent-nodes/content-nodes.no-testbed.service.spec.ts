import { ContentNodesService } from './content-nodes.service';
import {RoutePathItem, RoutePath, ContentPathItem, ContentPath, ContentNodes} from "./content-nodes";

describe('ContentNodesService without the TestBed - getPathItems', () => {
  let service: ContentNodesService;

  beforeEach(() => {
    service = new ContentNodesService();
  });

  it('should ...', () => {
    expect(service).toBeTruthy();
  });

  it('should return undefined if contentNodes is empty urlpath and is undefined', () => {
    let tmp = service.getPathItems([],undefined);
    expect(service.getPathItems([],undefined)).toEqual([]);
  });

  describe('ContentNodesService without the TestBed - getPathItems', () => {
    let contentNodes:ContentNodes = [{projects: []}];
    let contentRoutePath = [ {partialRoute: 'projects', selectedIndex: 0} ];

    it('should return undefined if contentNodes is not empty and urlpath is undefined', () => {
      expect(service.getPathItems(contentNodes,undefined)).toEqual([]);
    });

    xit('should return projects if contentNodes consists of project and urlpath is project', () => {
      console.log(service.getPathItems(contentNodes,contentRoutePath));
      expect(service.getPathItems(contentNodes,contentRoutePath))
          .toEqual([{type: 'projects', contentNodes: undefined, selectedIndex: undefined} ]);
    });

  });

});


/*

describe('DependentService without the TestBed', () => {
  let service: DependentService;
  it('#getValue should return real value by way of the real FancyService', () => {
    service = new DependentService(new FancyService());
    expect(service.getValue()).toBe('real value');
  });
  it('#getValue should return faked value by way of a fakeService', () => {
    service = new DependentService(new FakeFancyService());
    expect(service.getValue()).toBe('faked value');
  });
  it('#getValue should return faked value from a fake object', () => {
    const fake =  { getValue: () => 'fake value' };
    service = new DependentService(fake as FancyService);
    expect(service.getValue()).toBe('fake value');
  });
  it('#getValue should return stubbed value from a FancyService spy', () => {
    const fancy = new FancyService();
    const stubValue = 'stub value';
    const spy = spyOn(fancy, 'getValue').and.returnValue(stubValue);
    service = new DependentService(fancy);
    expect(service.getValue()).toBe(stubValue, 'service returned stub value');
    expect(spy.calls.count()).toBe(1, 'stubbed method was called once');
    expect(spy.calls.mostRecent().returnValue).toBe(stubValue);
  });
});*/
