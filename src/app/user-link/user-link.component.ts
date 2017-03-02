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


}
