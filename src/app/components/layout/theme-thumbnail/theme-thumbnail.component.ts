import {Component, Input, OnInit} from '@angular/core';
import {Theme} from "./theme";


@Component({
  selector: 'app-theme-thumbnail',
  templateUrl: './theme-thumbnail.component.html',
  styleUrls: ['./theme-thumbnail.component.scss']
})
export class ThemeThumbnailComponent implements OnInit {
  themeModel: ThemeModel | undefined;
  subThemeModel: ThemeModel | undefined;

  constructor() {
  }

  @Input()
  theme: Theme = new Theme;

  private static getParam(link: string, param: string): string | null {
    const url = new URL(link);
    const urlParams = new URLSearchParams(url.search);
    return urlParams.get(param);
  }

  ngOnInit(): void {
    const themeBase64 = ThemeThumbnailComponent.getParam(this.theme.link as string, 'c') as string;
    this.themeModel = this.fromExternal(themeBase64) as ThemeModel;
    if(this.theme.subThemeLink) {
      const subThemeBase64 = ThemeThumbnailComponent.getParam(this.theme.subThemeLink as string, 'c') as string;
      this.subThemeModel = this.fromExternal(subThemeBase64) as ThemeModel;
    }
  }
  fromExternal(context: string): ThemeModel {
    const text = atob(context.replace(/[$]/g, '+').replace(/~/g, '\/'))
      .replace(/&(.)(.)(.)/g, (a, r: string, g: string, b: string) => {
        return `#${[r, g, b].map(x => x.charCodeAt(0).toString(16).padStart(2, '0')).join('')}`;
      })
      .replace(/@/g, 'target')
      .replace(/[\^]/g, 'main')
      .replace(/%/g, 'accent')
      .replace(/[(]/g, 'display')
      .replace(/[)]/g, 'heading')
      .replace(/;/g, 'dark')
      .replace(/[?]/g, 'light')
      .replace(/=/g, 'Background')
      .replace(/</g, '":"')
      .replace(/>/g, '":')
      .replace(/`/g, '{"')
      .replace(/~/g, '"}');

    return JSON.parse(text);
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
