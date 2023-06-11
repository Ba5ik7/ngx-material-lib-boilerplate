import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  selector: 'demo-app',
  template: `
    <navbar class="mat-elevation-z6"></navbar>
    <router-outlet></router-outlet>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
  `]
})
export class AppComponent {
  title = 'demo';
}
