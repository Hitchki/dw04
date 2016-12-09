import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../shared/firebase/firebase.service";
import {MockdataService} from "../shared/mockdata/mockdata.service";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  private database = { user: {name: 'franz1'}, save_with_name: 'franz1'};

  constructor(
    private firebaseService: FirebaseService,
    private mockdataServide: MockdataService
  ) { }

  ngOnInit() {
  }

  getProject() {
    console.log('getProject: ' + this.database.user.name);
    this.firebaseService.loadProjects(this.database.user.name)
      .subscribe(
        data => console.log('data: ', data),
        (err) => console.log('data-err: ', err),
        () => console.log('data-complete: ' )
      );
  }

  saveProject() {
    console.log('saveProject', this.database.save_with_name);
  }

}
