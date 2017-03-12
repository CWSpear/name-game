import { Component } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Sets initial value to true to show loading spinner on first load
  loading: boolean = true;

  constructor(private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      setTimeout(() => this.loading = true);
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => this.loading = false);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      setTimeout(() => this.loading = false);
    }
    if (event instanceof NavigationError) {
      setTimeout(() => this.loading = false);
    }
  }
}
