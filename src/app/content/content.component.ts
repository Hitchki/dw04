import { Component, OnInit } from '@angular/core';
import {ProjectsService} from "../shared/model/projects/projects.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
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
    // this.projectUrl = this.route.snapshot.params['projectUrl'];
    // this.subProjectUrl = this.route.snapshot.params['subprojects'];
    // this.buildUrlPath(this.projectUrl);

    // this.heroes = this.route.params
    //   .switchMap((params: Params) => {
    //     this.selectedId = +params['id'];
    //     return this.service.getHeroes();
    //   });

    // this.route.params
    //   .forEach((params) => {
    //     console.log('activatedRoute', this.route);
    //     this.projectUrl = params['projectUrl'];
    //     this.subProjectUrl = params['subProjectUrl'];
    //     // return this.service.getHeroes();
    //   });

    this.route.params
      .forEach((params) => {
        // console.log('activatedRoute', this.route);
        this.projectUrl = params['projectUrl'];
        this.subProjectUrl = params['subProjectUrl'];
        // return this.service.getHeroes();
      });

    // this.projectsService.loadProjects(this.projectUrl)
    this.projectsService.loadProjects('')
      .subscribe(
        (data) => console.log('projectLoading success! ', data),
        (err) => console.log('projectLoading error! ', err),
        () => console.log('projectLoading completed')
      );
  }


  testNavigation() {
    this.router.navigate(['/projects', 3, 'subprojects', 3, {foo0: 'foo'} ], {relativeTo: this.route});
    // this.router.navigate([3, 'subprojects', 3]);
  }

  buildUrlPath(projectUrl: string) {
    let routePath:RoutePath = this.contentPathService.getUrlPath(projectUrl);
  }

}
