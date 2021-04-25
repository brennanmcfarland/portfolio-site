import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute,
    ) {
    // set the title according to the route
    this.getPrimaryRoute(
      router.events.pipe(filter(event => event instanceof NavigationEnd))
    ).pipe(mergeMap((route: ActivatedRoute) => route.data))
    .subscribe((routeData: any) => {
      const title = routeData.title ?
        routeData.title + " - Brennan McFarland"
        : "Brennan McFarland - Portfolio Site";
      titleService.setTitle(title);
    });
  }

  /**
   * Get the current primary route from the state tree
   * @param navigationEvent$ the event triggering the route fetch
   */
  private getPrimaryRoute(navigationEvent$: Observable<any>) {
    return navigationEvent$.pipe(
      map(_ => this.route),
      map((route: ActivatedRoute) => {
        while(route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route: ActivatedRoute) => route.outlet == "primary"),
    );
  }
}
