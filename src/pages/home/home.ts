import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  temp:string;
  hum:string;
  pres:string;
  text:string;

  constructor(public navCtrl: NavController) {
    
  }

}
