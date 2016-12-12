import { Component, OnInit } from '@angular/core';
import {ProjectsService} from "../shared/model/projects/projects.service";
import {Router, ActivatedRoute} from "@angular/router";
import {ContentPathService} from "../shared/model/content-path/content-path.service";
import {RoutePath} from "../shared/model/content-nodes/content-nodes";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private projectUrl: string;
  private subProjectUrl: string;
  private testUrl: string = 'http://localhost:4200/projects/1/subprojects/16';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private contentPathService: ContentPathService
  ) { }

  ngOnInit() {
    this.projectUrl = this.route.snapshot.params['projectUrl'];
    // this.buildUrlPath(this.projectUrl);
    this.subProjectUrl = this.route.snapshot.params['subprojects'];
    // this.buildUrlPath(this.projectUrl);

    // this.projectsService.loadProjects(this.projectUrl)
    this.projectsService.loadProjects('')
      .subscribe(
        (data) => console.log('projectLoading success! ', data),
        (err) => console.log('projectLoading error! ', err),
        () => console.log('projectLoading completed')
      );
  }

  navigateByUrl(testUrl) {
    this.router.navigateByUrl(encodeURI(testUrl));
  }

  navigateTo(testUrl) {
    this.router.navigate(['/projects', 1,'subprojects', 2 ]);
  }

  buildUrlPath(projectUrl: string) {
    let routePath:RoutePath = this.contentPathService.getUrlPath(projectUrl);
  }

}
