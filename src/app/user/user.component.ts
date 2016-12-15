import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private userId: string;

  constructor(    private router: Router,
                  private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params
      // .forEach((params) => {
      //   console.log('activatedRoute', this.route);
      //   this.userId = params['userId'];
      //   // this.subProjectUrl = params['subProjectUrl'];
      //   // return this.service.getHeroes();
      // })
      // .do(console.log.bind(this, 'das ist ein Überfall'))
      // .do(console.table)
      .subscribe((params) => console.table(params));

    this.route.children[0].url
    // .forEach((params) => {
    //   console.log('activatedRoute', this.route);
    //   this.userId = params['userId'];
    //   // this.subProjectUrl = params['subProjectUrl'];
    //   // return this.service.getHeroes();
    // })
    // .do(console.log.bind(this, 'das ist ein Überfall'))
    // .do(console.table)
      .subscribe((params) => console.table(params))
  }

}
