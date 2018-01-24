import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() name: string;

  @Output('delete') delete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  deleteMember(name: string) {
    this.delete.emit(name);
  }

}
