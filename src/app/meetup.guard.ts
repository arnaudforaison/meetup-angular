import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { environment } from '../environments/environment';
import { MeetupMember } from './dashboard/meetup.model';

import 'rxjs/add/operator/map';
import * as _ from 'lodash';
import { DashboardService } from './dashboard/dashboard.service';

@Injectable()
export class MeetupGuard implements Resolve<MeetupMember[]> {

  constructor(private dashboardService: DashboardService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.dashboardService.getMeetupMembers();
  }
}
