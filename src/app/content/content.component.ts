import { Component, OnInit } from '@angular/core';
import {ProjectsService} from "../shared/model/projects/projects.service";
import {Router, ActivatedRoute} from "@angular/router";
import {ContentPathService} from "../shared/model/content-path/content-path.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private projectUrl: string;

  constructor(
    // private router: Router,
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private contentPathService: ContentPathService
  ) { }

  ngOnInit() {
    this.projectUrl = this.route.snapshot.params['projectUrl'];
    this.buildUrlPath(this.projectUrl);

    // this.projectsService.loadProjects(this.projectUrl)
    this.projectsService.loadProjects('')
      .subscribe(
        (data) => console.log('projectLoading success! ', data),
        (err) => console.log('projectLoading error! ', err),
        () => console.log('projectLoading completed')
      );
  }

  buildUrlPath(projectUrl: string) {
    
  }

}
