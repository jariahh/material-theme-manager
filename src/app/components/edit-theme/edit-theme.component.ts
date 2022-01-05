import { Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import {
    FontOption,
    PaletteOption
} from '../../../../projects/theme-controller/src/app/layout/theme-thumbnail/theme-thumbnail.component';
import { pSBC } from './palette/pSBC';
import { RenderService } from './render.service';
import { ThemeService } from './theme.service';

export class EditTheme {
    palettes: PaletteOption[] = [];
    fonts: FontOption[] = [];
    iconStyle: 'Filled' | 'Outlined' | 'Rounded' | 'TwoTone' | 'Sharp' = 'Filled';
    lightness: any;
    version: any;
    lightText?: any;
    darkText?: any;
    darkBackground?: any;
    lightBackground?: any;
}

@Component({
  selector: 'app-edit-theme',
  templateUrl: './edit-theme.component.html',
  styleUrls: ['./edit-theme.component.scss']
})
export class EditThemeComponent implements OnInit {
    theme = {
        lightness: true,
        lightText: '#fff',
        darkText: '#1a1a1a',
        darkBackground: '#333',
        lightBackground: '#cecece',
        palettes: [{
            name: 'primary',
            main: '#2e4fb6',
            lighter: '#c0cae9',
            darker: '#1d369e',
        }, {
            name: 'accent',
            main: '#a9a9a9',
            lighter: '#e5e5e5',
            darker: '#8f8f8f',
        }, {
            name: 'warn',
            main: '#ff0000',
            lighter: '#ffb3b3',
            darker: '#ff0000',
        }] as PaletteOption[],
        fonts: [
            {
                target: 'display-4',
                size: 112,
                lineHeight: 112,
                weight: 300,
                family: 'Roboto',
                spacing: -0.0134
            },
            {target: 'display-3', size: 56, lineHeight: 56, weight: 400, family: 'Roboto', spacing: -0.0089},
            {target: 'display-2', size: 45, lineHeight: 48, weight: 400, family: 'Roboto', spacing: 0.0000},
            {target: 'display-1', size: 34, lineHeight: 40, weight: 400, family: 'Roboto', spacing: 0.0074},
            {target: 'headline', size: 24, lineHeight: 32, weight: 400, family: 'Roboto', spacing: 0.0000},
            {target: 'title', size: 20, lineHeight: 32, weight: 500, family: 'Roboto', spacing: 0.0075},
            {
                target: 'subheading-2',
                size: 16,
                lineHeight: 28,
                weight: 400,
                family: 'Roboto',
                spacing: 0.0094
            },
            {
                target: 'subheading-1',
                size: 15,
                lineHeight: 24,
                weight: 500,
                family: 'Roboto',
                spacing: 0.0067
            },
            {target: 'body-1', size: 14, lineHeight: 20, weight: 400, family: 'Roboto', spacing: 0.0179},
            {target: 'body-2', size: 14, lineHeight: 24, weight: 500, family: 'Roboto', spacing: 0.0179},
            {target: 'button', size: 14, lineHeight: 14, weight: 500, family: 'Roboto', spacing: 0.0893},
            {target: 'caption', size: 12, lineHeight: 20, weight: 400, family: 'Roboto', spacing: 0.0333},
            {target: 'input', size: 'inherit', lineHeight: 1.125, weight: 400, family: 'Roboto', spacing: 1.5}
        ] as any as FontOption[],
        iconStyle: 'Filled'
    } as EditTheme;

    columnDefs = [
        { field: 'target', width: 130 },
        { field: 'family', width: 100 },
        { field: 'size', width: 80 },
        // { field: 'lineHeight', width: 120 },
        { field: 'weight', width: 100 },
        { field: 'spacing', width: 100 }
    ] as ColDef[];
    constructor(private el: ElementRef,
                private zone: NgZone,
                private themeService: ThemeService) {
    }

    ngOnInit(): void {
    }

    public addPalette() {
        this.theme.palettes.push({name: 'new palette', main: '#333', darker:  pSBC.adjust(-.5, '#333')??'#000', lighter: pSBC.adjust(.5, '#333')??'#999'})
    }

    public getTheme() {

        const iframe = (this.el.nativeElement as HTMLElement).querySelector('iframe');
        const body = iframe?.contentDocument?.body;
        if(body == null || iframe == null) return;
        this.zone.runOutsideAngular(() => {
            this.themeService.compileScssTheme(RenderService.getTemplate(this.theme)).then((css: string) => {
                if (body.childNodes && body.childNodes.item(0) &&
                    (body.childNodes.item(0) as HTMLElement).tagName &&
                    (body.childNodes.item(0) as HTMLElement).tagName.toLowerCase() === 'style') {
                    body.removeChild(body.childNodes.item(0));
                }
                const style = iframe.contentDocument?.createElement('style');
                if (style == null) return;
                style.type = 'text/css';
                style.textContent = css;
                body.insertBefore(style, body.childNodes.item(0));
            });
        });
    }
}
