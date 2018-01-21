import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  elements = [
    { label: 'Dashboard', iconName: 'dashboard'},
    { label: 'Météo', iconName: 'wb_sunny'}
  ]
}
