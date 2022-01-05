import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() showThemesEditable = false;
  @Input()
  theme: Theme = new Theme;
  @Output() editTheme = new EventEmitter<Theme>()

  ngOnInit(): void {
    const models = this.themeService.getThemeModels(this.theme);
    this.themeModel = models.themeModel;
    this.subThemeModel = models.subThemeModel;
  }

  public editClicked($event: MouseEvent) {
    // $event.stopPropagation();
    this.editTheme.emit(this.theme);
  }
}

export interface PaletteOption {
    name?: string;
    main: string;
    lighter: string;
    darker: string;
}

export interface Palette {
  primary: PaletteOption;
  accent: PaletteOption;
  warn: PaletteOption;
  lightText: string;
  lightBackground: string;
  darkText: string;
  darkBackground: string;
}

export interface Font {
  target: string;
  size?: any;
}

enum FontWeight {
    light = 300,
    medium = 400,
    regular = 500
}

export interface FontOption {
    family: string;
    target: string;
    weight: FontWeight;
    size: string;
    lineHeight: number;
    spacing: string;
}
export interface ThemeModel {
  palette: Palette;
  fonts: Font[];
  icons: string;
  lightness: boolean;
}
