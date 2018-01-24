import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MeetupMember } from './meetup.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  members: Observable<MeetupMember[]>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.members = this.route.data.map(data => data.members);
  }

}
