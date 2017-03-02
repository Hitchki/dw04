import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

// import {CanComponentDeactivate} from "../junk_old_shared/service/can-deactivate-guard.service";
import {ContentComponent} from "../content/content.component";
import {ContentLoadService} from "../core/central-services/content-load.service";
import {CentralService} from "../core/central-services/central.service";

import {SelectedDirective} from "../shared/selected/selected.directive";


@Component({
  selector: 'app-user-link',
  templateUrl: './user-link.component.html',
  styleUrls: ['./user-link.component.css'],
})
export class UserLinkComponent implements OnInit, AfterViewInit {
  // export class UserLinkComponent implements OnInit, AfterViewInit, CanComponentDeactivate {
  @ViewChild(ContentComponent) private contentComponent: ContentComponent

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
    private centralService: CentralService)
  { }

  ngOnInit() {
    this.route.fragment
    // .do(console.log.bind(this, 'fragment'))
      .subscribe(
        fragment => {

          // this.userId = fragment.match(/^(.+?)\//g)[0];
          let userId = fragment.slice(0, fragment.indexOf('/'));
          this.fragment = fragment.replace(/^.+?\//,'');
          // console.debug('!!!this.fragment!!!', this.fragment);

          if (userId !== this.userId) {
            this.userId = userId;
            this.loadProject();
          } else {
            this.centralService.getPathNodes(this.fragment, this.projects);
          }

          // // this.fragment = fragment;
        } // (fragment) => { this.fragment = fragment; console.debug('this.fragment', this.fragment) }
      );
  }

  loadProject() {
    //mockDataUrl: './app/core/mockdata/data/vwl-diskussion.json' }
    //loadProjects(userId: string, useMockdata?: true, useMockdataUrl?: string):Observable<any>
    // this.contentLoadService.loadProjects(this.userId, true, './app/core/mockdata/data/vwl-diskussion.json')
    // this.contentLoadService.loadProjects(this.userId || 'vwl')

    //Todo .json() falls mockdata
    // this.contentLoadService.loadProjects(this.userId, true, './app/core/mockdata/testdata/test1.json')
    this.contentLoadService.loadProjects(this.userId)
      .subscribe(
        userDb => {
          this.userDb = userDb;
          this.projects = this.userDb.projects;

          this.centralService.userId = this.userId;

          // console.debug('this loaded userDb', this.userDb);
          // console.debug('this loaded json', this.userDb);
          // console.debug('this projects', this.projects);

          this.centralService.getPathNodes(this.fragment, this.projects);
        }
      );
  }

  ngOnInitOld() {
    this.route.params
      .subscribe(
        params => {
          this.userId = params['userId'];
          this.loadProject();
        }
      )

    this.subscribeRouteFragment();
  }

  subscribeRouteFragment() {
    this.route.fragment
    // .do(console.log.bind(this, 'fragment'))
      .subscribe(
        fragment => {
          this.fragment = fragment;
          console.debug('!!!this.fragment', this.fragment);
        } // (fragment) => { this.fragment = fragment; console.debug('this.fragment', this.fragment) }
      );
  }

  ngAfterViewInit() {
    // this.contentComponent.test();
  }

  ////////////////////////////////////////////


  buttonHerumspiel($event) {
    console.log('buttonHerumspiel', $event);
  }

  OnInitVeryOld() {
    // this.route.queryParams
    //   .subscribe(
    //     queryParams => {
    //       this.queryParams = queryParams;
    //     }
    //   );
    this.testTest();

    this.route.fragment
    // .do(console.log.bind(this, 'fragment'))
      .subscribe(
        fragment => {
          this.fragment = fragment;
          // console.debug('this.fragment', this.fragment);
          this.userId = this.getUserId();
          // console.debug('this.userId', this.userId);

          this.loadProjectOld();

        } // (fragment) => { this.fragment = fragment; console.debug('this.fragment', this.fragment) }
      );
  }

  loadProjectOld(){
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
        // console.debug('this.mainContent', this.mainContent);
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
    //userId is part of fragment
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

  testTest(){
    this.centralService.testTest();
  }

}
