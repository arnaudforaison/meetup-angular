import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as _ from 'lodash';
import { MeetupMember } from './meetup.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  public getMeetupMembers(): Observable<MeetupMember[]> {
    const url = 'https://api.meetup.com/Proxiad-Nord-Lille/events/246014510/rsvps';

    const params = new HttpParams()
      .set('sign', 'true')
      .set('key', environment.meetup.apiKey)
      .set('photo-host', 'secure')
      .set('response', 'yes')
      .set('only', 'member');

    return this.httpClient.get(url, { params }).map(members => _.map(members, 'member'));
  }

}
