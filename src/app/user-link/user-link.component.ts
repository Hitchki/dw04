import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ContentLoadService} from "../shared/model/content-load/content-load.service";
import {ContentPathService} from "../shared/model/content-path/content-path.service";

@Component({
  selector: 'app-user-link',
  templateUrl: './user-link.component.html',
  styleUrls: ['./user-link.component.css']
})
export class UserLinkComponent implements OnInit {

  private userId: string;
  private fragment: string;
  private project: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentLoadService: ContentLoadService,
    private contentPathService: ContentPathService)
  { }

  ngOnInit() {
    this.route.queryParams
      .do(console.log.bind(this, 'queryParams'))
      .subscribe(
        // () => this.userId = ;
      );

    this.route.fragment
      .subscribe(
        { next: (fragment) => { this.fragment = fragment; console.debug(this.fragment) } }
      );

    this.userId = this.getUserId();

    this.contentLoadService.loadProjects('franz')
      .subscribe(
        { next: (project) => { this.project = project; console.debug('this.project', this.project) } }
      );

    // this.project = this.contentLoadService.loadProjects(this.userId) || undefined;

    // console.debug('this.project',this.project);
    // console.table('this.project', this.project);
  }

  getUserId() {
    return this.fragment ? this.fragment.split('/')[1] : undefined;
  }

}
