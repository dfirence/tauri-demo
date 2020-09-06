import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Large)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  app = {
    title: "Tauri Angular Demo",
    sidenav_title: "SideMenu Options",
    sidenavLinks: [
      "One",
      "Two",
      "Three"
    ]
  }
  constructor(private breakpointObserver: BreakpointObserver) {}

}
