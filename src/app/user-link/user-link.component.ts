import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ContentLoadService} from "../shared/model/content-load/content-load.service";
import {ContentPathService} from "../shared/model/content-path/content-path.service";
import {CanComponentDeactivate} from "../shared/service/can-deactivate-guard.service";

@Component({
  selector: 'app-user-link',
  templateUrl: './user-link.component.html',
  styleUrls: ['./user-link.component.css'],
})
export class UserLinkComponent implements OnInit, CanComponentDeactivate {

  private userId: string;
  private userDb: any;
  private fragment: string;
  private projects: any;
  private queryParams: any;
  private playGroundParam1 = 'franz1/projects/0/';
  private nodesByUrl = 'vwl/projects/0/subprojects';
  private nodeByUrl = 'vwl/projects/0/';

  private mainContent: any;
  private infoContent: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentLoadService: ContentLoadService,
    private contentPathService: ContentPathService)
  { }

  ngOnInit() {
    // this.route.queryParams
    //   .subscribe(
    //     queryParams => {
    //       this.queryParams = queryParams;
    //     }
    //   );

    this.route.fragment
      // .do(console.log.bind(this, 'fragment'))
      .subscribe(
        fragment => {
          this.fragment = fragment;
          console.debug('this.fragment', this.fragment);
          this.userId = this.getUserId();
          console.debug('this.userId', this.userId);

          this.loadProject();

        }// (fragment) => { this.fragment = fragment; console.debug('this.fragment', this.fragment) }
      );

  }

  loadProject(){
    //todo change '|| franz1'
    this.contentLoadService.loadProjects(this.userId || 'vwl')
      .subscribe(
        userDb => {

          this.userDb = userDb;
          this.projects = this.userDb.projects;
          // console.debug('this loaded userDb', this.userDb);
          // console.debug('this.projects', this.userDb.projects);
          // console.debug('this.projects', this.userDb.projects);
          // console.table(this.userDb.projects);
        }
      );

    this.loadNodeByUrl('vwl/projects/0/subprojects/0/normtext').subscribe(
      contentNodes => {
        this.mainContent = contentNodes;
        console.debug('this.mainContent', this.mainContent);
      }
    );

    this.loadNodeByUrl('vwl/projects/0/subprojects/0/normtext').subscribe(
      contentNodes => {
        // this.infoContent = contentNodes;
        // console.debug('this.infoContent', this.infoContent);
      }
    );
  }

  loadNodesByUrl(nodesUrl) {
    return this.contentLoadService.loadNodesByUrl(nodesUrl);
  }

  loadNodeByUrl(nodeUrl) {
    return this.contentLoadService.loadNodeByUrl(nodeUrl);
  }

  getUserId() {
    return this.fragment ? this.fragment.split('/')[0] : undefined;
  }

  save(userId) {
    console.log(userId);
    let db = JSON.parse(JSON.stringify(this.userDb));
    delete db['$key'];
    console.log('db', db);
    this.contentLoadService.saveProjects(userId, db);
  }


  testLoadNodeByUrl() {
    this.loadNodeByUrl(this.nodeByUrl).subscribe(
      (node) => console.log(node),
      (err) => console.log('error happened')
    );
  }

  testLoadNodesByUrl() {
    this.loadNodesByUrl(this.nodesByUrl).subscribe(
      (node) => console.log(node),
      (err) => console.log('error happened')
    );
  }

  playGround1() {
    this.loadNodeByUrl(this.playGroundParam1).subscribe(
      (node) => console.log(node),
      (err) => console.log('error happened')
    );

    // this.loadNodesByUrl(this.playGroundParam1).subscribe(
    //   (nodes) => console.log(nodes),
    //   (err) => console.log('error happened')
    // );
  }

  public canDeactivate() {
    alert('canDeactivate');
    return true;
  }

  allowLeave() {
    return false;
  }

}
