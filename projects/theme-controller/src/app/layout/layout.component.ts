import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter, Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import {BehaviorSubject, Subscription} from "rxjs";
import {Theme} from "./theme-thumbnail/theme";
import {MatDrawer} from "@angular/material/sidenav";
import {ThemeService} from "../theme.service";

@Component({
  selector: 'theme-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy, AfterViewInit{
  @Output() editTheme = new EventEmitter<Theme>()
  // @ts-ignore
  @ViewChild('sidenavContainer') private sidenavContainer: ElementRef<MatDrawer>;
  @Output() menuToggle = new EventEmitter<boolean>();
  @Input() themes: Theme[] = [];
  @Input() isIconMenu = false;
  @Input() showThemes = true;
  @Input() showThemesEditable = false;
  @Input() showDarkMode = true;
  @Input() isMenuOpen = false;
  @Input() menuLayout: 'side' | 'push' | 'over' = `side`;
  // @ts-ignore
  @ViewChild('innerTheme') innerTheme: ElementRef<HTMLDivElement>;
  selectedTheme$ = new BehaviorSubject<Theme>(this.themes[0]);
  darkMode$ = new BehaviorSubject<boolean>(false);
  set darkMode(value: boolean){
    sessionStorage.setItem('isDarkMode', value ? 'true' : 'false');
    this.darkMode$.next(value);
    this.themeService.darkMode$.next(value);
  }
  get darkMode(){
    return this.darkMode$.getValue();
  }
  private subscriptions = new Subscription();
  opened: boolean = false;
  constructor(private renderer: Renderer2,
              private themeService: ThemeService) { }

  ngAfterViewInit(): void {
    this.opened = this.isMenuOpen;
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
    this.subscriptions.add(this.selectedTheme$.subscribe(value => {
      this.themeService.selectedTheme$.next(value)
    }));
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

