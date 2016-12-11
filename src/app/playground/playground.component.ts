import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../shared/firebase/firebase.service";
import {MockdataService} from "../shared/mockdata/mockdata.service";
import {ContentLoadService} from "../shared/model/content-load/content-load.service";
import {ContentPathService} from "../shared/model/content-path/content-path.service";
import {ActivatedRoute} from "@angular/router";

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
    private contentPathService: ContentPathService
  ) { }

  ngOnInit() {
    this.getProjectFromFirebase(this.database.user.name);
    this.projectUrl = this.route.snapshot.params['projectUrl'];
    // this.contentPathService = this.projectUrl;
  }

  getProject() {
    this.getProjectFromContentLoadService();
    this.getProjectFromFirebase(this.database.user.name);
  }

  getProjectFromContentLoadService() {
    this.contentLoadService.loadProjects('', true, './app/shared/mockdata/data/vwl-diskussion.json')
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
