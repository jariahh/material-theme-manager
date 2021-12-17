import { Injectable } from '@angular/core';
import {ThemeModel} from "./layout/theme-thumbnail/theme-thumbnail.component";
import {Theme} from "./layout/theme-thumbnail/theme";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeModel: ThemeModel | undefined;
  subThemeModel: ThemeModel | undefined;
  selectedTheme$ = new BehaviorSubject<Theme>(null as any);
  darkMode$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  private static getParam(link: string, param: string): string | null {
    const url = new URL(link);
    const urlParams = new URLSearchParams(url.search);
    return urlParams.get(param);
  }

  getThemeModels(theme: Theme): { subThemeModel: ThemeModel | undefined; themeModel: ThemeModel } {
    const themeBase64 = ThemeService.getParam(theme.link as string, 'c') as string;
    this.themeModel = this.fromExternal(themeBase64) as ThemeModel;
    if(theme.subThemeLink) {
      const subThemeBase64 = ThemeService.getParam(theme.subThemeLink as string, 'c') as string;
      this.subThemeModel = this.fromExternal(subThemeBase64) as ThemeModel;
    }
    return {
      themeModel: this.themeModel,
      subThemeModel: this.subThemeModel
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
