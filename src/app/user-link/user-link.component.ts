import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-link',
  templateUrl: './user-link.component.html',
  styleUrls: ['./user-link.component.css']
})
export class UserLinkComponent implements OnInit {

  constructor(
    route: ActivatedRoute,
    router: Router)
  { }

  ngOnInit() {

  }

}
