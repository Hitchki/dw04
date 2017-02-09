import { Component, OnInit } from '@angular/core';
import {Play3Service} from "../../core/central-services/play3.service";

@Component({
  selector: 'app-play3',
  templateUrl: './play3.component.html',
  styleUrls: ['./play3.component.css']
})
export class Play3Component implements OnInit {

  constructor(
    private play3Service: Play3Service
  ) { }

  ngOnInit() {
    // alert(this.play3Service.dwTest);
  }

}
