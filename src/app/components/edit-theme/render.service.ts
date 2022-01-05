import { Injectable } from '@angular/core';
import {
    PaletteOption
} from '../../../../projects/theme-controller/src/app/layout/theme-thumbnail/theme-thumbnail.component';
import { EditTheme } from './edit-theme.component';

import * as tinycolor from 'tinycolor2';

export interface FontSelection {
    target: string;
    family: string;
    variant: 'light' | 'regular' | 'medium';
    size: number;
    lineHeight?: number;
    capitalized: boolean;
    spacing: number;
}

export interface AllFontSelection {
    [key: string]: FontSelection;
}

export interface FontMeta {
    kind: string;
    family: string;
    category: string;

    files: any[];
    variants: string[];
}

export const DEFAULT_FONTS: { [key: string]: FontSelection } = {
    'display-4': {
        target: 'display-4',
        family: 'Roboto',
        variant: 'light',
        size: 112,
        lineHeight: 112,
        spacing: -1.5,
        capitalized: false
    },
    'display-3': {
        target: 'display-3',
        family: 'Roboto',
        variant: 'regular',
        size: 56,
        lineHeight: 56,
        spacing: -.5,
        capitalized: false
    },
    'display-2': {
        target: 'display-2',
        family: 'Roboto',
        variant: 'regular',
        size: 45,
        lineHeight: 48,
        spacing: 0,
        capitalized: false
    },
    'display-1': {
        target: 'display-1',
        family: 'Roboto',
        variant: 'regular',
        size: 34,
        lineHeight: 40,
        spacing: .25,
        capitalized: false
    },
    headline: {
        target: 'headline',
        family: 'Roboto',
        variant: 'regular',
        size: 24,
        lineHeight: 32,
        spacing: 0,
        capitalized: false
    },
    title: {
        target: 'title',
        family: 'Roboto',
        variant: 'medium',
        size: 20,
        lineHeight: 32,
        spacing: 0.15,
        capitalized: false
    },
    'subheading-2': {
        target: 'subheading-2',
        family: 'Roboto',
        variant: 'regular',
        size: 16,
        lineHeight: 28,
        spacing: 0.15,
        capitalized: false
    },
    'subheading-1': {
        target: 'subheading-1',
        family: 'Roboto',
        variant: 'medium',
        size: 15,
        lineHeight: 24,
        spacing: .1,
        capitalized: false
    },
    'body-2': {
        target: 'body-2',
        family: 'Roboto',
        variant: 'medium',
        size: 14,
        lineHeight: 24,
        spacing: .25,
        capitalized: false
    },
    'body-1': {
        target: 'body-1',
        family: 'Roboto',
        variant: 'regular',
        size: 14,
        lineHeight: 20,
        spacing: .25,
        capitalized: false
    },
    button: {
        target: 'button',
        family: 'Roboto',
        variant: 'medium',
        size: 14,
        lineHeight: 14,
        spacing: 1.25,
        capitalized: true
    },
    caption: {
        target: 'caption',
        family: 'Roboto',
        variant: 'regular',
        size: 12,
        lineHeight: 20,
        spacing: .4,
        capitalized: false
    },
    input: {
        target: 'input',
        family: 'Roboto',
        variant: 'regular',
        size: 12,
        lineHeight: 1.125,
        spacing: 1.25,
        capitalized: true
    }
};
@Injectable({
  providedIn: 'root'
})
export class RenderService {
    static FONT_FAMILY_MAPPING = {
        Rounded: 'Material Icons Round',
        TwoTone: 'Material Icons Two Tone',
        Filled: 'Material Icons',
        Outlined: 'Material Icons Outlined',
        Sharp: 'Material Icons Sharp'
    };

    static MIX_AMOUNTS_PRIMARY = {
        50: [true, 12],
        100: [true, 30],
        200: [true, 50],
        300: [true, 70],
        400: [true, 85],
        500: [true, 100],
        600: [false, 87],
        700: [false, 70],
        800: [false, 54],
        900: [false, 25]
    };

    static MIX_AMOUNTS_SECONDARY = {
        A100: [15, 80, 65],
        A200: [15, 80, 55],
        A400: [15, 100, 45],
        A700: [15, 100, 40]
    };

    static fontRule(x: FontSelection, ctx: EditTheme) {
        const weight = x.variant === 'light' ? '300' : (x.variant === 'medium' ? '500' : '400');

        const fn = ctx.version >= 12 ? `mat.define-typography-level` : `mat-typography-level`;

        return !!x.size ?
            `${fn}(${x.size}px, ${x.lineHeight}px, ${weight}, '${x.family}', ${(x.spacing / x.size).toFixed(4)}em)` :
            `${fn}(inherit, ${x.lineHeight}, ${weight}, '${x.family}', 1.5px)`;
    }

    static toJSON(theme: EditTheme) {
        const data = {
            ...theme,
            // palette: theme.palettes,
            // fonts: theme.fonts,
            // fonts: theme.fonts.map(x => {
            //     const keys = Object.keys(x).filter(k => k === 'target' || x[k] !== DEFAULT_FONTS[x.target][k]);
            //     return keys.reduce((acc, v) => {
            //         acc[v] = x[v];
            //         return acc;
            //     }, {});
            // }),
            // icons: theme.iconStyle,
            // lightness: theme.lightness,
            // version: theme.version
        };
        console.log(data);
        return JSON.stringify(data);
    }

    static toExternal(theme: EditTheme) {
        const context = this.toJSON(theme)
            .replace(/target/g, '@')
            .replace(/main/g, '^')
            .replace(/accent/g, '%')
            .replace(/display/g, '(')
            .replace(/heading/g, ')')
            .replace(/dark/g, ';')
            .replace(/light/g, '?')
            .replace(/Background/g, '=')
            .replace(/":"/g, '<')
            .replace(/":/g, '>')
            .replace(/[{]"/g, '`')
            .replace(/"[}]/g, '~')
        // .replace(/[#]([0-9a-f]{1,2})([0-9a-f]{1,2})([0-9a-f]{1,2})\b/ig, (a, r: string, g: string, b: string) => {
        //   return `&${[r, g, b].map(x => String.fromCharCode(parseInt(x.padEnd(2, x), 16))).join('')}`;
        // })
        return btoa(context).replace(/[+]/g, '$').replace(/[/]/g, '~');
    }

    static fromExternal(context: string): EditTheme {
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

    static getTextColor(col: string) {
        return `$${tinycolor(col).isLight() ? 'dark' : 'light'}-primary-text`;
    }

    static getScssPalette(name: string, p: PaletteOption, theme: EditTheme) {
        return `
body {
  --${name}-color: ${p.main};
  --${name}-lighter-color: ${p.lighter};
  --${name}-darker-color: ${p.darker};
  --text-${name}-color: #{${this.getTextColor(p.main)}};
  --text-${name}-lighter-color: #{${this.getTextColor(p.lighter)}};
  --text-${name}-darker-color: #{${this.getTextColor(p.darker)}};
}
$mat-${name}: (
  main: ${p.main},
  lighter: ${p.lighter},
  darker: ${p.darker},
  200: ${p.main}, // For slide toggle,
  contrast : (
    main: ${this.getTextColor(p.main)},
    lighter: ${this.getTextColor(p.lighter)},
    darker: ${this.getTextColor(p.darker)},
  )
);
$theme-${name}: mat.define-palette($mat-${name}, main, lighter, darker);
`;
    }

    static toExternalLink(theme: EditTheme) {
        const link = window.location.toString().replace(/[#?].*$/g, '');
        return `${link}?c=${this.toExternal(theme)}`;
    }

    constructor() {
    }

    static getTemplate(theme: EditTheme) {
        const primary = `@use '~@angular/material' as mat;`;
        const coreImport = `mat.core`;
        const themeImport = `mat.all-component-themes`;

        const primaryTheme = `(
  ${theme.palettes.map(x => this.getPalette(x)).join('\n  ')}
  is-dark: ${!theme.lightness},
  foreground: $mat-${theme.lightness ? 'light' : 'dark'}-theme-foreground,
  background: $mat-${theme.lightness ? 'light' : 'dark'}-theme-background,
)`;

        const altTheme = `(
  ${theme.palettes.map(x => this.getPalette(x)).join('\n  ')}
  is-dark: ${theme.lightness},
  foreground: $mat-${!theme.lightness ? 'light' : 'dark'}-theme-foreground,
  background: $mat-${!theme.lightness ? 'light' : 'dark'}-theme-background,
)`;

        const tpl = `/**
* Generated theme by Material Theme Generator
* https://materialtheme.arcsine.dev
* Fork at: ${this.toExternalLink(theme)}
*/
${primary}
// Include the common styles for Angular Material. We include this here so that you only
// have to load a single css file for Angular Material in your app.
// Fonts
@import 'https://fonts.googleapis.com/css?family=${this.FONT_FAMILY_MAPPING[theme.iconStyle].replace(/ /g, '+')}';
${Array.from(new Set((theme.fonts || []).map(x => x.family.replace(/ /g, '+'))))
            .map(x => `@import url('https://fonts.googleapis.com/css?family=${x}:300,400,500');`).join('\n')}

$fontConfig: (
  ${(theme.fonts || []).map(x => `${x.target}: ${this.fontRule(x as any, theme)}`).join(',\n  ')}
);
// Foreground Elements
// Light Theme Text
$dark-text: ${theme.lightText};
$dark-primary-text: rgba($dark-text, 0.87);
$dark-accent-text: rgba($dark-primary-text, 0.54);
$dark-disabled-text: rgba($dark-primary-text, 0.38);
$dark-dividers: rgba($dark-primary-text, 0.12);
$dark-focused: rgba($dark-primary-text, 0.12);
$mat-light-theme-foreground: (
  base:              black,
  divider:           $dark-dividers,
  dividers:          $dark-dividers,
  disabled:          $dark-disabled-text,
  disabled-button:   rgba($dark-text, 0.26),
  disabled-text:     $dark-disabled-text,
  elevation:         black,
  secondary-text:    $dark-accent-text,
  hint-text:         $dark-disabled-text,
  accent-text:       $dark-accent-text,
  icon:              $dark-accent-text,
  icons:             $dark-accent-text,
  text:              $dark-primary-text,
  slider-min:        $dark-primary-text,
  slider-off:        rgba($dark-text, 0.26),
  slider-off-active: $dark-disabled-text,
);
// Dark Theme text
$light-text: ${theme.darkText};
$light-primary-text: $light-text;
$light-accent-text: rgba($light-primary-text, 0.7);
$light-disabled-text: rgba($light-primary-text, 0.5);
$light-dividers: rgba($light-primary-text, 0.12);
$light-focused: rgba($light-primary-text, 0.12);
$mat-dark-theme-foreground: (
  base:              $light-text,
  divider:           $light-dividers,
  dividers:          $light-dividers,
  disabled:          $light-disabled-text,
  disabled-button:   rgba($light-text, 0.3),
  disabled-text:     $light-disabled-text,
  elevation:         black,
  hint-text:         $light-disabled-text,
  secondary-text:    $light-accent-text,
  accent-text:       $light-accent-text,
  icon:              $light-text,
  icons:             $light-text,
  text:              $light-text,
  slider-min:        $light-text,
  slider-off:        rgba($light-text, 0.3),
  slider-off-active: rgba($light-text, 0.3),
);
// Background config
// Light bg
$light-background:    ${theme.lightBackground};
$light-bg-darker-5:   darken($light-background, 5%);
$light-bg-darker-10:  darken($light-background, 10%);
$light-bg-darker-20:  darken($light-background, 20%);
$light-bg-darker-30:  darken($light-background, 30%);
$light-bg-lighter-5:  lighten($light-background, 5%);
$dark-bg-tooltip:     lighten(${theme.darkBackground}, 20%);
$dark-bg-alpha-4:     rgba(${theme.darkBackground}, 0.04);
$dark-bg-alpha-12:    rgba(${theme.darkBackground}, 0.12);
$mat-light-theme-background: (
  background:               $light-background,
  status-bar:               $light-bg-darker-20,
  app-bar:                  $light-bg-darker-5,
  hover:                    $dark-bg-alpha-4,
  card:                     $light-bg-lighter-5,
  dialog:                   $light-bg-lighter-5,
  tooltip:                  $dark-bg-tooltip,
  disabled-button:          $dark-bg-alpha-12,
  raised-button:            $light-bg-lighter-5,
  focused-button:           $dark-focused,
  selected-button:          $light-bg-darker-20,
  selected-disabled-button: $light-bg-darker-30,
  disabled-button-toggle:   $light-bg-darker-10,
  unselected-chip:          $light-bg-darker-10,
  disabled-list-option:     $light-bg-darker-10,
);
// Dark bg
$dark-background:     ${theme.darkBackground};
$dark-bg-lighter-5:   lighten($dark-background, 5%);
$dark-bg-lighter-10:  lighten($dark-background, 10%);
$dark-bg-lighter-20:  lighten($dark-background, 20%);
$dark-bg-lighter-30:  lighten($dark-background, 30%);
$light-bg-alpha-4:    rgba(${theme.lightBackground}, 0.04);
$light-bg-alpha-12:   rgba(${theme.lightBackground}, 0.12);
// Background palette for dark themes.
$mat-dark-theme-background: (
  background:               $dark-background,
  status-bar:               $dark-bg-lighter-20,
  app-bar:                  $dark-bg-lighter-5,
  hover:                    $light-bg-alpha-4,
  card:                     $dark-bg-lighter-5,
  dialog:                   $dark-bg-lighter-5,
  tooltip:                  $dark-bg-lighter-20,
  disabled-button:          $light-bg-alpha-12,
  raised-button:            $dark-bg-lighter-5,
  focused-button:           $light-focused,
  selected-button:          $dark-bg-lighter-20,
  selected-disabled-button: $dark-bg-lighter-30,
  disabled-button-toggle:   $dark-bg-lighter-10,
  unselected-chip:          $dark-bg-lighter-20,
  disabled-list-option:     $dark-bg-lighter-10,
);
// Compute font config
@include ${coreImport}($fontConfig);
// Theme Config
${theme.palettes.map(x => this.getScssPalette(this.fixName(x.name), x, theme)).join('\n')};
$theme: ${primaryTheme};
$altTheme: ${altTheme};
// Theme Init
@include ${themeImport}($theme);
.theme-alternate {
  @include ${themeImport}($altTheme);
}
// Specific component overrides, pieces that are not in line with the general theming
// Handle buttons appropriately, with respect to line-height
.mat-raised-button, .mat-stroked-button, .mat-flat-button {
  padding: 0 1.15em;
  margin: 0 .65em;
  min-width: 3em;
  line-height: ${(theme.fonts.find(x => x.target === 'button')?.lineHeight ?? 0) * 2.6}px
}
.mat-standard-chip {
  padding: .5em .85em;
  min-height: 2.5em;
}
.material-icons {
  font-size: 24px;
  font-family: '${this.FONT_FAMILY_MAPPING[theme.iconStyle]}', 'Material Icons';
  .mat-badge-content {
    font-family: '${theme.fonts.find(x => x.target === 'caption')?.family}';
  }
}
`;
        console.log(tpl);
        // tslint:enable:no-trailing-whitespace
        // tslint:enable:max-line-length
        return tpl;
    }

    private static fixName(name: string | undefined) {
        if (name == null) {
            return 'unknown';
        }
        return name.replace(/\s+/g, '-');
    }

    private static getPalette(paletteOption: PaletteOption) {
        return `${this.fixName(paletteOption.name)}: $theme-${this.fixName(paletteOption.name)},`;
    }


}
