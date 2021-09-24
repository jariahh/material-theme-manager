import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import {BehaviorSubject, Subscription} from "rxjs";
import {Theme} from "./theme-thumbnail/theme";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy, AfterViewInit{
  @Output() menuToggle = new EventEmitter<boolean>();
  // @ts-ignore
  @ViewChild('innerTheme') innerTheme: ElementRef<HTMLDivElement>;
  themes = [
    {
      name: 'default',
      className: 'default-theme',
      link: 'https://materialtheme.arcsine.dev/?c=YHBhbGV0dGU$YHByaW1hcnk$YF48IzMzODVjYyIsIj9lcjwjYzJkYWYwIiwiO2VyPCMyMDY4Yjl$LCIlPmBePCM3YWJkZDYiLCI~ZXI8I2Q3ZWJmMyIsIjtlcjwjNWRhNmM2fiwid2Fybj5gXjwjZmYwMDAwIiwiP2VyPCNmZmIzYjMiLCI7ZXI8I2ZmMDAwMH4sIj9UZXh0PCMwMDAwMDAiLCI~PTwjZmFmYWZhIiwiO1RleHQ8I2ZmZmZmZiIsIjs9PCMyYzJjMmN$LCJmb250cz5bYEA8KC00fixgQDwoLTN$LGBAPCgtMn4sYEA8KC0xfixgQDxoZWFkbGluZX4sYEA8dGl0bGV$LGBAPHN1YiktMn4sYEA8c3ViKS0xfixgQDxib2R5LTJ$LGBAPGJvZHktMX4sYEA8YnV0dG9ufixgQDxjYXB0aW9ufixgQDxpbnB1dCIsInNpemU$bnVsbH1dLCJpY29uczxGaWxsZWQiLCI~bmVzcz50cnVlLCJ2ZXJzaW9uPjEyfQ==',
      subThemeLink: 'https://materialtheme.arcsine.dev/?c=YHBhbGV0dGU$YHByaW1hcnk$YF48I2EwYjJjMiIsIj9lcjwjZTNlOGVkIiwiO2VyPCM4NDk5YWN$LCIlPmBePCNkNWQ3ZDgiLCI~ZXI8I2YyZjNmMyIsIjtlcjwjYzRjN2M4fiwid2Fybj5gXjwjZmYwMDAwIiwiP2VyPCNmZmIzYjMiLCI7ZXI8I2ZmMDAwMH4sIj9UZXh0PCMwMDAwMDAiLCI~PTwjZmFmYWZhIiwiO1RleHQ8I2ZmZmZmZiIsIjs9PCMyYzJjMmN$LCJmb250cz5bYEA8KC00fixgQDwoLTN$LGBAPCgtMn4sYEA8KC0xfixgQDxoZWFkbGluZX4sYEA8dGl0bGV$LGBAPHN1YiktMn4sYEA8c3ViKS0xfixgQDxib2R5LTJ$LGBAPGJvZHktMX4sYEA8YnV0dG9ufixgQDxjYXB0aW9ufixgQDxpbnB1dCIsInNpemU$bnVsbH1dLCJpY29uczxGaWxsZWQiLCI~bmVzcz50cnVlfQ=='
    },
    {
      name: 'secondary',
      className: 'secondary-theme',
      link: 'https://materialtheme.arcsine.dev/?c=YHBhbGV0dGU$YHByaW1hcnk$YF48I2JhOGIyOSIsIj9lcjwjZWFkY2JmIiwiO2VyPCNhMzZlMTl$LCIlPmBePCNlNGU0ZTQiLCI~ZXI8I2Y3ZjdmNyIsIjtlcjwjZDlkOWQ5fiwid2Fybj5gXjwjZmY0ODAwIiwiP2VyPCNmZmM4YjMiLCI7ZXI8I2ZmMzAwMH4sIj9UZXh0PCMwMDAwMDAiLCI~PTwjZmZmYWVmIiwiO1RleHQ8I2ZmZmZmZiIsIjs9PCMzYjM1MmF$LCJmb250cz5bYEA8KC00fixgQDwoLTN$LGBAPCgtMn4sYEA8KC0xfixgQDxoZWFkbGluZX4sYEA8dGl0bGV$LGBAPHN1YiktMn4sYEA8c3ViKS0xfixgQDxib2R5LTJ$LGBAPGJvZHktMX4sYEA8YnV0dG9ufixgQDxjYXB0aW9ufixgQDxpbnB1dCIsInNpemU$bnVsbH1dLCJpY29uczxGaWxsZWQiLCI~bmVzcz50cnVlLCJ2ZXJzaW9uPjEyfQ==',
      subThemeLink: 'https://materialtheme.arcsine.dev/?c=YHBhbGV0dGU$YHByaW1hcnk$YF48IzM4OWI0NyIsIj9lcjwjYzNlMWM4IiwiO2VyPCMyNDdmMmZ$LCIlPmBePCNkMGNmY2YiLCI~ZXI8I2YxZjFmMSIsIjtlcjwjYmViZGJkfiwid2Fybj5gXjwjZmY0ODAwIiwiP2VyPCNmZmM4YjMiLCI7ZXI8I2ZmMzAwMH4sIj9UZXh0PCMwMDAwMDAiLCI~PTwjZjdlOWNkIiwiO1RleHQ8I2ZmZmZmZiIsIjs9PCMzYjM1MmF$LCJmb250cz5bYEA8KC00fixgQDwoLTN$LGBAPCgtMn4sYEA8KC0xfixgQDxoZWFkbGluZX4sYEA8dGl0bGV$LGBAPHN1YiktMn4sYEA8c3ViKS0xfixgQDxib2R5LTJ$LGBAPGJvZHktMX4sYEA8YnV0dG9ufixgQDxjYXB0aW9ufixgQDxpbnB1dCIsInNpemU$bnVsbH1dLCJpY29uczxGaWxsZWQiLCI~bmVzcz50cnVlLCJ2ZXJzaW9uPjEyfQ=='
    },
    {
      name: 'purple',
      className: 'purple',
      link: 'https://materialtheme.arcsine.dev/?c=YHBhbGV0dGU$YHByaW1hcnk$YF48IzcxM2ZjZSIsIj9lcjwjZDRjNWYwIiwiO2VyPCM1NDI5YmN$LCIlPmBePCNiMTIxZTIiLCI~ZXI8I2U4YmNmNiIsIjtlcjwjOTgxNGQ2fiwid2Fybj5gXjwjZmYwMDAwIiwiP2VyPCNmZmIzYjMiLCI7ZXI8I2ZmMDAwMH4sIj9UZXh0PCMwMDAwMDAiLCI~PTwjZmFmYWZhIiwiO1RleHQ8I2ZmZmZmZiIsIjs9PCMyYzJjMmN$LCJmb250cz5bYEA8KC00fixgQDwoLTN$LGBAPCgtMn4sYEA8KC0xfixgQDxoZWFkbGluZX4sYEA8dGl0bGV$LGBAPHN1YiktMn4sYEA8c3ViKS0xfixgQDxib2R5LTJ$LGBAPGJvZHktMX4sYEA8YnV0dG9ufixgQDxjYXB0aW9ufixgQDxpbnB1dCIsInNpemU$bnVsbH1dLCJpY29uczxGaWxsZWQiLCI~bmVzcz50cnVlLCJ2ZXJzaW9uPjEyfQ=='
    }
  ] as Theme[];
  selectedTheme$ = new BehaviorSubject<Theme>(this.themes[0]);
  darkMode$ = new BehaviorSubject<boolean>(false);
  set darkMode(value: boolean){
    sessionStorage.setItem('isDarkMode', value ? 'true' : 'false');
    this.darkMode$.next(value);
  }
  get darkMode(){
    return this.darkMode$.getValue();
  }
  private subscriptions = new Subscription();
  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.selectedTheme$.next(this.getThemeOrFirst());
    this.darkMode$.next(this.getDarkOrDefault());
    this.subscriptions.add(this.selectedTheme$.subscribe(theme => {
      try {
        this.renderer.addClass(document.body, theme.className);
      } catch {
      }
    }));
    this.subscriptions.add(this.darkMode$.subscribe(darkMode => {
      try {
        if (darkMode) {
          this.renderer.addClass(document.body, 'theme-alternate');
          this.renderer.addClass(this.innerTheme.nativeElement, 'theme-alternate');
        } else {
          this.renderer.removeClass(document.body, 'theme-alternate');
          this.renderer.removeClass(this.innerTheme.nativeElement, 'theme-alternate');
        }
      } catch {
      }
    }));
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  setTheme(theme: Theme): void {
    sessionStorage.setItem('themeName', theme.name);
    this.clearTheme(this.selectedTheme$.getValue());
    this.selectedTheme$.next(theme);
  }

  private clearTheme(value: Theme): void {
    try {
      this.renderer.removeClass(document.body, value.className);
    } catch {}
  }

  toggleDarkMode(): void {
    const isDarkMode = this.darkMode$.getValue();
    sessionStorage.setItem('isDarkMode', isDarkMode ? 'false' : 'true');
    this.darkMode$.next(!isDarkMode);
  }

  menuToggleOpen($event: boolean) {
    this.menuToggle.next($event);
  }

  private getThemeOrFirst(): Theme {
    let themeName = sessionStorage.getItem('themeName');
    if (!themeName) {
      themeName = 'default';
    }
    return this.themes.find(t => t.name === themeName) as Theme;
  }
  private getDarkOrDefault(): boolean {
    return sessionStorage.getItem('isDarkMode') === 'true';
  }
}

