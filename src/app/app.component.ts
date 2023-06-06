import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import tt from '@tomtom-international/web-sdk-maps';
import { Observable, Subscriber } from 'rxjs';

import { environment } from '../environments/environment';
import { Position } from './interfaces/position.model';

@Component({
  selector: 'app-root',
  template: `<div id='map' class='map'></div>`,
  styles: [`@import "@tomtom-international/web-sdk-maps";

  #map {
    width: 800px;
    height: 100vh;
  }`],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements AfterViewInit {
  title = 'angular-tomtom-api';
  API_KEY = environment.tomtom.key;
  map: any;
  //initialise position with coords of the Eiffel Tower
  position: Position = { latitude: 48.858093, longitude: 2.294694 };

  ngOnInit(): any {}

  ngAfterViewInit(): void {
    this.mapInit();
  }

  private getUserPosition = (): Observable<Position> => {
    const userPosition = new Observable((observer: Subscriber<any>) => {
      navigator.geolocation
        ? navigator.geolocation.getCurrentPosition((pos: any) => {
            observer.next({
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
            });
            observer.complete();
          })
        : observer.error();
    });
    return userPosition;
  };

  private mapInit(): void {
    this.map = tt.map({
      key: this.API_KEY,
      container: 'map',
    });

    this.map.addControl(new tt.NavigationControl());
    this.map.addControl(new tt.FullscreenControl());

    this.getUserPosition().subscribe((pos: Position) => {
      this.map.flyTo({
        center: {
          lat: pos.latitude,
          lng: pos.longitude,
        },
        zoom: 14,
      });

      const popup = new tt.Popup({
        anchor: 'bottom',
        offset: { bottom: [0, -40] },
      }).setHTML(
        `Your position:<br/><b>latitude:</b> ${pos.latitude}, <br/><b>longitude:</b> ${pos.longitude}`
      );
      const marker = new tt.Marker()
        .setLngLat({
          lat: pos.latitude,
          lng: pos.longitude,
        })
        .addTo(this.map);
      marker.setPopup(popup).togglePopup();
    });
  }
}
