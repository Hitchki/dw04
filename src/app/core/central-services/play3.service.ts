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
    this.dwTest = "funzt";
    this.dbRef = dbRef.database().ref();

    // this.test();
    this.test1();
  }

  test1() {
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
    console.log('pathValues1', pathValues1);
    console.log('pathValues', pathValues);
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
