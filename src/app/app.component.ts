import {Component, OnDestroy, OnInit,} from '@angular/core';
import {IMenuItem} from "./components/menu/IMenuItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  menuIsOpen: boolean = false;
  menu = [
    {
      icon: 'account_box',
      title: 'Menu Item One',
      path: 'main',
      children: [{
        icon: 'android',
        title: 'Sub Menu Item One',
        path: 'level-2',
        children: [{
          icon: 'android',
          title: 'Sub Menu Item One',
          path: 'level-3',
          children: [{
            icon: 'android',
            title: 'Sub Menu Item One',
            path: 'level-4/1',
          }, {
            icon: 'autorenew',
            title: 'Sub Menu Item Two',
            path: 'level-4/2',
          }] as IMenuItem[],
        }, {
          icon: 'autorenew',
          title: 'Sub Menu Item Two',
          path: 'level-3/2',
        }] as IMenuItem[],
      }, {
        icon: 'autorenew',
        title: 'Sub Menu Item Two',
        path: 'level-2/1',
      }] as IMenuItem[]
    }, {
      icon: 'android',
      title: 'Menu Item Two',
      path: 'two',
      children: [{
        icon: 'android',
        title: 'Sub Menu Item One',
        path: 'level-2/1',
      }, {
        icon: 'autorenew',
        title: 'Sub Menu Item Two',
        path: 'level-2/2',
      }] as IMenuItem[]
    }, {
      icon: 'autorenew',
      title: 'Menu Item Three',
      path: 'three',
      children: [{
        icon: 'android',
        title: 'Sub Menu Item One',
        path: 'level-2/1',
      }, {
        icon: 'autorenew',
        title: 'Sub Menu Item Two',
        path: 'level-2/2',
      }] as IMenuItem[]
    }
  ] as IMenuItem[];
  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  menuToggle(isOpen: boolean) {
    this.menuIsOpen = isOpen;
  }
}
