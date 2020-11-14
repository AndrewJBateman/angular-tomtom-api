import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-tomtom-api'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-tomtom-api');
  });

  it(`should have an API key present, of type string and of the correct length`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.API_key).toBeDefined();
    expect(app.API_key).not.toEqual('');
    expect(typeof(app.API_key)).toEqual('string');
    expect((app.API_key.length)).toEqual(32);
  });

  it('contain html data & should render a map component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.nativeElement;
    console.log('compiled.querySelector', compiled.querySelector('div #map'));
    expect(compiled.querySelector('a')).toBeDefined();
    expect(compiled.querySelector('div.map')).toBeDefined();
    expect(
      compiled.querySelector('mapboxgl-control-container')
    ).toBeDefined();
  });
});
