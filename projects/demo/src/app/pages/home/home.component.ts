import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { TerryLibModule } from 'terry-lib';

@Component({
  selector: 'app-home',
  template: `
    <header class="header-background">
      <div class="header-section">
        <div class="header-headline">
          <h1>Terry Lib</h1>
          <h2>Custom Themeable Angular Material Component</h2>
        </div>
        <div class="header-start">
          <a mat-raised-button color="accent">Get started</a>
        </div>
      </div>
    </header>
    <main class="home-main">
      <mat-card>
        <h2>Editor Js</h2>
        <mat-divider></mat-divider>
        <terry-lib></terry-lib>
      </mat-card>
    </main>
  `,
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    TerryLibModule
  ],
})
export class HomeComponent { }
