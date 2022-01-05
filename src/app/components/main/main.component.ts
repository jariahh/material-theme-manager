import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Theme } from '../../../../projects/theme-controller/src/app/layout/theme-thumbnail/theme';
import { IMenuItem } from '../../../../projects/theme-controller/src/app/menu/IMenuItem';
import { MenuService } from './menu.service';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  menuIsOpen: boolean = true;
  isIconMenu = true;
  menu: IMenuItem[] = [];
  themes: Theme[] = [];
  constructor(private menuService: MenuService,
              private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.menuService.getMenu().pipe(tap(menu => this.menu = menu)).subscribe();
    this.themeService.getThemes().pipe(tap(themes => this.themes = themes)).subscribe();
  }

  ngOnDestroy(): void {
  }

  menuToggle(isOpen: boolean) {
    this.menuIsOpen = isOpen;
  }
}
