import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemePickerService } from './theme-picker.service';

@Component({
  selector: 'theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ThemePickerComponent implements OnInit {

  currentTheme: string | undefined;
  themes: Map<string, string> = new Map([
    ['educational', 'Educational'],
    ['fall', 'Fall'],
    ['fun', 'Fun'],
    ['indigo-amber', 'Indigo & Amber'],
    ['indigo-green', 'Indigo & Green'],
    ['pink-bluegrey', 'Pink & Blue-grey'],
    ['professional', 'Professional'],
    ['purple-green', 'Purple & Green'],
    ['spring', 'Spring'],
    ['summer', 'Summer'],
    ['synthwave', 'Synthwave'],
    ['vanguard', 'Vanguard'],
    ['winter', 'Winter'],
  ]);

  constructor(
      private themePickerService: ThemePickerService,
      iconRegistry: MatIconRegistry,
      sanitizer: DomSanitizer
  ) {
    const themeExampleIconURL = sanitizer.bypassSecurityTrustResourceUrl(ThemePickerService.THEME_EXAMPLE_ICON);
    iconRegistry.addSvgIcon('theme-example', themeExampleIconURL);

    const themeName = themePickerService.getStoredThemeName();
    this.selectTheme(themeName.value !== ThemePickerService.NOT_FOUND ? themeName.value : ThemePickerService.DEFAULT_THEME);
  }

  ngOnInit(): void { }

  selectTheme(theme: string): void {
    this.themePickerService.setStyle('theme', `${theme}.css`);
    this.themePickerService.storeTheme(theme);
    this.currentTheme = theme;
  }

}
