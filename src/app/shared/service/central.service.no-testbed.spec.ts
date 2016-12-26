
import {CentralService} from "./central.service";
import {ContentLoadService} from "../model/content-load/content-load.service";
import {ConfigService} from "../config/config.service";
import {FirebaseService} from "../firebase/firebase.service";
import {MockdataService} from "../mockdata/mockdata.service";
import {Http} from "@angular/http";
import {AngularFire, AngularFireDatabase} from "angularfire2";

describe('this is a test', () =>{

  let centralService;
  // let contentLoadService: ContentLoadService = new ContentLoadService();

  beforeEach( () => {
    centralService = new CentralService(new ContentLoadService(
      new ConfigService(),
      new FirebaseService(),
      new MockdataService(new ConfigService(), new Http()),
    ));
  });

  describe('loadTestTree', ()=>{


    xit('', function () {
      expect(true).toBeTruthy();
    });
  });


  // it('always true', function () {
  //   expect(true).toBeTruthy();
  // });
});
