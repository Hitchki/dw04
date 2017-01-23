import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FirebaseService} from "../core/firebase/firebase.service";
import {MockdataService} from "../core/mockdata/mockdata.service";
import {ContentLoadService} from "../core/central-services/content-load.service";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  private database = { user: {name: 'franz1'}, save_with_name: 'franz1'};
  private projects;
  private projectUrl;

  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService,
    private mockdataService: MockdataService,
    private contentLoadService: ContentLoadService,
  ) { }

  ngOnInit() {
    this.getProjectFromFirebase(this.database.user.name);
    this.projectUrl = this.route.snapshot.params['projectUrl'];
  }

  getProject() {
    this.getProjectFromContentLoadService();
    this.getProjectFromFirebase(this.database.user.name);
  }

  getProjectFromContentLoadService() {
    this.contentLoadService.loadProjects('', true, './app/core/mockdata/data/vwl-diskussion.json')
      .subscribe(
        data => { this.projects = data.json(); console.log('loadservice-data: ',this.projects )},
        (err) => console.log('data-err: ', err),
        () => console.log('data-complete: ' )
      );
  }

  getProjectFromFirebase(userId: string) {
    console.log('getFirebaseProject: ' + userId);
    this.firebaseService.loadProjects(userId)
      .subscribe(
        data => console.log('firebase-data: ', data),
        (err) => console.log('data-err: ', err),
        () => console.log('data-complete: ' )
      );
  }

  getProjectFromMockdata() {
    console.log('getProject from Mockdata: ' + this.database.user.name);
    this.mockdataService.loadProjects(this.database.user.name)
      .subscribe(
        data => console.log('data: ', data),
        (err) => console.log('data-err: ', err),
        () => console.log('data-complete: ' )
      );
  }

  saveProject() {
    console.log('saveProject', this.database.save_with_name);
    this.contentLoadService.saveProjects(this.database.save_with_name, this.projects);
  }

}
