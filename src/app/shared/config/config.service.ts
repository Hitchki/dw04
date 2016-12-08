import { Injectable } from '@angular/core';

import { config } from './config';

@Injectable()
export class ConfigService {
  public config: any;

  constructor(
    // public  config: Object
  ) {
    this.config = config;
  }

}
