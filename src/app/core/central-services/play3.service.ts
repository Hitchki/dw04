import {Injectable, Inject} from '@angular/core';
import {FirebaseService} from "../firebase/firebase.service";
import {AngularFire, FirebaseRef} from "angularfire2";

@Injectable()
export class Play3Service {

  dbRef: any;
  public dwTest: string;
  // constructor(private af:AngularFire,  @Inject(FirebaseRef) dbRef) {
  //   this.dbRef = dbRef.database().ref();
  // }

  constructor(
    private firebaseService: FirebaseService,
    @Inject(FirebaseRef) dbRef
  ) {


    // this.test();
    // this.test1(dbRef);
    // this.firebaseAuthTests(dbRef)
    this.objectBindingTest();
  }


  objectBindingTest() {

  }


  firebaseAuthTests (dbRef) {
    this.anonymousAuthentication(dbRef);
  }


  anonymousAuthentication(dbRef)  {
    this.dbRef = dbRef.database().ref();

    // this.dbRef.o
    // debugger;

    // this.dbRef = new Firebase(ref);
      this.dbRef.onAuth(function(authData) {
      if (!authData) {

      } else {
        console.log('user has been authenticated: ', authData);
      }
    });

    this.dbRef.authAnonymously(function (err, authData) {
      console.log('anonymoulsy logged out: ', authData);
    });
  }









  test1(dbRef) {

    this.dwTest = "funzt";
    this.dbRef = dbRef.database().ref();

    // const testKey = this.dbRef.child('test2');
    const testKey = this.dbRef;

    let input = "test2/projects/0/subprojects/30/normtext/1";

    // let input = "test2/projects/0/subprojects/1/normtext/1";

    let inputArr = input.split('/');
    let ref = testKey;
    let pathRefs = [];
    let pathValues = [];
    let pathValues1 = [];

    for (let i = 0; i < inputArr.length; i++) {
      pathValues1.push(i);
      ref = ref.child(inputArr[i]);
      if (!ref) {
        break;
      } else {
        pathRefs.push(ref);
        // pathValues.push(ref.once('value'));
        ref.once('value').then(
          snapshot => pathValues.push({i: i, snap: snapshot.val()} )
          // snapshot => pathValues1.push(i)
        );
      }
    }

    console.log('pathRefs', pathRefs);

    let pathRefOnce = pathRefs.map((pathRef)=>ref.once('value'));
    console.log('pathRefOnce: ', pathRefOnce);

    let pathRefSnap;
    pathRefs.forEach((pathRef, index)=>ref.once('value', snapshot => pathRefSnap[index] = snapshot));
    console.log('pathRefSnap: ', pathRefSnap);

    let pathRefVal = pathRefs.map((pathRef)=> {
      ref.once('value').then(snapshot => snapshot.val())
      return
    });
    console.log('pathRefVal: ', pathRefVal);

    // console.log('pathRefs', pathRefs);
    //
    // console.log('pathValues1', pathValues1);
    // console.log('pathValues', pathValues);
  }

  test() {

    // http://localhost:4200/user-link#test2/projects/0/subprojects/1/normtext/1
    console.debug('this.dbRef', this.dbRef);
    const testKey = this.dbRef.child('test2')
      .child('projects')
      .child('0')
      .child('subprojects');

    let xyz = testKey.once('value').then(function(snapshot) {
      let uuu = snapshot.val();
      // var username = snapshot.val().username;
      // // ...
    });

    console.debug('xyz',xyz );
    console.debug('testKey',testKey );
  }

}
