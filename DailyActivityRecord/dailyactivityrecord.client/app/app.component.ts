import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ], // ✅ Add CommonModule & RouterModule
  templateUrl: './app.component.html',
})
export class AppComponent {
  showHeader = true;

  constructor(private router: Router) {
    // Hide the header on login and register pages
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader = !['/login', '/register'].includes(event.urlAfterRedirects);
      }
    });
  }
}
