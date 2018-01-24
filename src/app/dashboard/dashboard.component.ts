import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  members: Observable<any[]>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    const url = 'https://api.meetup.com/Proxiad-Nord-Lille/events/246014510/rsvps';

    const params = new HttpParams()
      .set('sign', 'true')
      .set('key', environment.meetup.apiKey)
      .set('photo-host', 'secure')
      .set('response', 'yes')
      .set('only', 'member');

    const options = {
      params
    };
    this.members = this.httpClient.get(url, options).map(members => _.map(members, 'member'));
  }

}
