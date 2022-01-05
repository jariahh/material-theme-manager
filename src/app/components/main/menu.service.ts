import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMenuItem } from '../../../../projects/theme-controller/src/app/menu/IMenuItem';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu = [{
    icon: 'home',
    title: 'Home',
    path: 'main'
  }, {
    icon: 'android',
    title: 'components',
    path: 'components',
    children: [
      { title: 'Autocomplete', path: 'autocomplete' },
      { title: 'Checkbox', path: 'checkbox' },
      { title: 'Datepicker', path: 'datepicker' },
      { title: 'Native Date', path: 'native-date' },
      { title: 'Form Field', path: 'form-field' },
      { title: 'Input', path: 'input' },
      { title: 'Radio', path: 'radio' },
      { title: 'Select', path: 'select' },
      { title: 'Slider', path: 'slider' },
      { title: 'Slide Toggle', path: 'slide-toggle' },
      { title: 'Menu', path: 'menu' },
      { title: 'Sidenav', path: 'sidenav' },
      { title: 'Toolbar', path: 'toolbar' },
      { title: 'Card', path: 'card' },
      { title: 'Divider', path: 'divider' },
      { title: 'Expansion', path: 'expansion' },
      { title: 'GridList', path: 'gridlist' },
      { title: 'List', path: 'list' },
      { title: 'Stepper', path: 'stepper' },
      { title: 'Tabs', path: 'tabs' },
      { title: 'Tree', path: 'tree' },
      { title: 'Button', path: 'button' },
      { title: 'Button Toggle', path: 'button-toggle' },
      { title: 'Badge', path: 'badge' },
      { title: 'Chips', path: 'chips' },
      { title: 'Icon', path: 'icon' },
      { title: 'Progress Spinner', path: 'progress-spinner' },
      { title: 'Progress Bar', path: 'progress-bar' },
      { title: 'Ripple', path: 'ripple' },
      { title: 'Bottom Sheet', path: 'bottom-sheet' },
      { title: 'Dialog', path: 'dialog' },
      { title: 'Snack Bar', path: 'snack-bar' },
      { title: 'Tooltip', path: 'tooltip' },
      { title: 'Paginator', path: 'paginator' },
      { title: 'Sort', path: 'sort' },
      { title: 'Table', path: 'table' },
    ] as IMenuItem[]
  }, {
      icon: 'account_box',
      title: 'Account Settings',
      path: 'account',
    }, {
      icon: 'help',
      title: 'About Us',
      path: 'about-us'
    }
  ] as IMenuItem[];

  constructor() {
  }

  public getMenu(): Observable<IMenuItem[]> {
    return of(this.menu);
  }
}
