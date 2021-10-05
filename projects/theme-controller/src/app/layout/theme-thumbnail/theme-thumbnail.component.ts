import {Component, Input, OnInit} from '@angular/core';
import {Theme} from "./theme";
import {ThemeService} from "../../theme.service";


@Component({
  selector: 'theme-thumbnail',
  templateUrl: './theme-thumbnail.component.html',
  styleUrls: ['./theme-thumbnail.component.scss']
})
export class ThemeThumbnailComponent implements OnInit {
  themeModel: ThemeModel | undefined;
  subThemeModel: ThemeModel | undefined;

  constructor(private themeService: ThemeService) {
  }

  @Input()
  theme: Theme = new Theme;

  ngOnInit(): void {
    const models = this.themeService.getThemeModels(this.theme);
    this.themeModel = models.themeModel;
    this.subThemeModel = models.subThemeModel;
  }
}

export interface Primary {
  main: string;
  lighter: string;
  darker: string;
}

export interface Accent {
  main: string;
  lighter: string;
  darker: string;
}

export interface Warn {
  main: string;
  lighter: string;
  darker: string;
}

export interface Palette {
  primary: Primary;
  accent: Accent;
  warn: Warn;
  lightText: string;
  lightBackground: string;
  darkText: string;
  darkBackground: string;
}

export interface Font {
  target: string;
  size?: any;
}

export interface ThemeModel {
  palette: Palette;
  fonts: Font[];
  icons: string;
  lightness: boolean;
}
