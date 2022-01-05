import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
declare var Sass: any;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

    $themeScss: Promise<void>;

    constructor(private http: HttpClient) {
        this.$themeScss = this.loadThemingScss();
    }

    loadThemingScss() {
        return this.http.get('/assets/angular_11_theming.scss', { responseType: 'text' })
            .pipe(
                map(x => {
                    return x
                        .replace(/\n/gm, '??')
                        .replace(/\$mat-([^:?]+)\s*:\s*\([? ]*50:[^()]*contrast\s*:\s*\([^)]+\)[ ?]*\);\s*?/g,
                            (all, name) => name === 'grey' ? all : '')
                        .replace(/\/\*.*?\*\//g, '')
                        .split(/[?][?]/g)
                        .map(l => l
                            .replace(/^\s*(\/\/.*)?$/g, '')
                            .replace(/^\$mat-blue-gray\s*:\s*\$mat-blue-grey\s*;\s*/g, '')
                            .replace(/^\s*|\s*$/g, '')
                            .replace(/:\s\s+/g, ': ')
                        )
                        .filter(l => !!l)
                        .join('\n');
                }),
                map(txt =>
                    Sass.writeFile('~@angular/material/theming', txt))
            ).toPromise();
    }
    public async compileScssTheme(template: string) {
        await this.$themeScss;
        return new Promise<string>((res, rej) =>
            Sass.compile(template.replace('@include angular-material-theme($altTheme);', ''), (v: any) => {
                if (v.status === 0) {
                    res(v.text);
                } else {
                    rej(v);
                }
            })
        );
    }
}
