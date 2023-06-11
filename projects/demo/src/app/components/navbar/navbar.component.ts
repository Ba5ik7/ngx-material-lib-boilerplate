import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ThemePickerComponent } from '../theme-picker/theme-picker.component';

@Component({
  selector: 'ngx-navbar',
  template: `
    <nav class="navbar-header mat-elevation-z6">
      <a mat-button routerLink="/" class="demo-logo-container">
        <mat-icon class="demo-logo">tips_and_updates</mat-icon>
        <span>Terry-Lib</span>
      </a>
      <div class="flex-spacer"></div>
      <ngx-theme-picker></ngx-theme-picker>
    </nav>
  `,
  styles: [`
    :host {
      position: fixed;
      left: 0;
      right: 0;
      z-index: 2;
    }
    .navbar-header {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 8px 16px;
    }
    mat-icon.demo-logo {
      font-size: 1.625rem;
      width: 26px;
      height: 26px;
      vertical-align: middle;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    MatIconModule,
    ThemePickerComponent
  ],
})
export class NavbarComponent { }
