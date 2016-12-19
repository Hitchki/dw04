import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ContentLoadService} from "../shared/model/content-load/content-load.service";
import {ContentPathService} from "../shared/model/content-path/content-path.service";

@Component({
  selector: 'app-user-link',
  templateUrl: './user-link.component.html',
  styleUrls: ['./user-link.component.css'],
})
export class UserLinkComponent implements OnInit {

  private userId: string;
  private userDb: any;
  private fragment: string;
  private projects: any;
  private queryParams: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentLoadService: ContentLoadService,
    private contentPathService: ContentPathService)
  { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(
        // (xx) => this.userId = xx;
        queryParams => {
          this.queryParams = queryParams;
          // console.debug('this.queryParams', this.queryParams) ;
        }
      );

    this.route.fragment
      // .do(console.log.bind(this, 'fragment'))
      .subscribe(
        fragment => {
          this.fragment = fragment;
          console.debug('this.fragment', this.fragment);
          this.userId = this.getUserId();
          console.debug('this.userId', this.userId);
        }
        // (fragment) => { this.fragment = fragment; console.debug('this.fragment', this.fragment) }
      );

    this.contentLoadService.loadProjects('franz1')
      .subscribe(
        userDb => {

          this.userDb = userDb;
          this.projects = this.userDb.projects;
          console.debug('this loaded userDb', this.userDb);
          console.debug('this.projects', this.userDb.projects);
          }
      );
  }

  getUserId() {
    return this.fragment ? this.fragment.split('/')[0] : undefined;
  }

  save(userId) {
    console.log(userId);
    console.log(userId);
    this.contentLoadService.saveProjects(userId, 'abcdefgh');
  }

}
