import { Component } from '@angular/core';
import {Theme} from "../../../theme-controller/src/app/layout/theme-thumbnail/theme";
import {ThemeService} from "../../../theme-controller/src/app/theme.service";

@Component({
  selector: 'app-main-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'main';
  color: 'primary' | 'accent' | 'warn' | null = 'primary';
  selectedTheme: Theme = null as any as Theme;
  constructor(private themeService: ThemeService) {
    this.themeService.selectedTheme$.subscribe(theme => this.selectedTheme = theme);
  }
}
