import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ngx-demo-app',
  template: `
    <ngx-navbar></ngx-navbar>
    <router-outlet></router-outlet>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
  `],
  standalone: true,
  imports: [NavbarComponent, RouterModule],
})
export class AppComponent { }
