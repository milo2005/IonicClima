import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Clima } from '../models/clima';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpClient {

  constructor(public http: Http) {

  }

  get(): Observable<Clima> {
    return this.http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22popayan%2C%20co%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
      .map(this.proccessResponse).catch(this.processError);
  }

  private proccessResponse(response:Response){
    let body = response.json();
    let channel =  body.query.results.channel;
    let atmosphere = channel.atmosphere;

    let hum = atmosphere.humidity;
    let press = atmosphere.pressure;

    let condition =  channel.item.condition;

    let temp = condition.temp;
    let text = condition.text;

    let clima =  new Clima(temp, hum, press, text);
    return clima;
  }

  private processError(){
    return Observable.throw("Error al consumir el servicio");
  }

}
