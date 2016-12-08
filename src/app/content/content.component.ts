import { Component, OnInit } from '@angular/core';
import {ProjectsService} from "../shared/model/projects/projects.service";
import {Router, ActivatedRoute} from "@angular/router";

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
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.projectUrl = this.route.snapshot.params['projectUrl'];

    this.projectsService.loadProjects(this.projectUrl)
      .subscribe(
        (data) => console.log('projectLoading success! ', data),
        (err) => console.log('projectLoading error! ', err),
        () => console.log('projectLoading completed')
      );
  }

}
