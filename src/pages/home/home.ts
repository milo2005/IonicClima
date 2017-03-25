import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { HttpClient } from '../../providers/http-client';
import { Clima } from '../../models/clima';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  temp: string;
  hum: string;
  pres: string;
  text: string;

  constructor(public navCtrl: NavController, client: HttpClient) {
    client.get().subscribe(clima => this.loadClima(clima,null)
    , err => this.loadClima(null, err));
  }

  loadClima(clima:Clima, err:string) {

    if(err){
      console.log(err);
      return;
    }

    this.temp = clima.temp;
    this.hum = clima.hum;
    this.pres = clima.pres;
    this.text = clima.text;

  }

}
