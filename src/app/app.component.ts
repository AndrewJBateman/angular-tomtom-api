import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import tt from '@tomtom-international/web-sdk-maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'angular-tomtom-api';
  API_KEY = '';
  ngOnInit(): any {
    const map = tt.map({
      key: this.API_KEY,
      container: 'map',
    });
    map.addControl(new tt.NavigationControl());
  }
}
