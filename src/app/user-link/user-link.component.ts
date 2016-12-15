import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-link',
  templateUrl: './user-link.component.html',
  styleUrls: ['./user-link.component.css']
})
export class UserLinkComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router)
  { }

  ngOnInit() {
    this.route.queryParams
      .do(console.log.bind(this, 'queryParams'))
      .subscribe();

    this.route.fragment
      .do(console.log.bind(this, 'fragment'))
      .subscribe()
  }

}
