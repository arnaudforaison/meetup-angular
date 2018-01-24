import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather: Observable<any>;
  currentDay: Date;

  months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    this.currentDay = new Date();

    const url = 'http://api.openweathermap.org/data/2.5/weather';

    const options = {
      params: new HttpParams().set('APPID', environment.weather.apiKey).set('id', '2998324').set('units', 'metric')
    };

    this.weather = this.httpClient.get(url, options);
  }

}
