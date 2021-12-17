import {Component, OnDestroy, OnInit,} from '@angular/core';
import {IMenuItem} from "../../projects/theme-controller/src/app/menu/IMenuItem";
import {Theme} from "../../projects/theme-controller/src/app/layout/theme-thumbnail/theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  menuIsOpen: boolean = false;
  isIconMenu = true;
  menu = [
    {
      icon: 'account_box',
      title: 'Menu Item One',
      path: 'main',
      children: [{
        title: 'Sub Menu Item One',
        path: 'level-2',
        children: [{
          title: 'Sub Menu Item One',
          path: 'level-3',
          children: [{
            title: 'Sub Menu Item One',
            path: 'level-4/1',
          }, {
            title: 'Sub Menu Item Two',
            path: 'level-4/2',
          }] as IMenuItem[],
        }, {
          title: 'Sub Menu Item Two',
          path: 'level-3/2',
        }] as IMenuItem[],
      }, {
        title: 'Sub Menu Item Two',
        path: 'level-2/1',
      }] as IMenuItem[]
    }, {
      icon: 'android',
      title: 'Menu Item Two',
      path: 'two',
      children: [{
        title: 'Sub Menu Item One',
        path: 'level-2/1',
      }, {
        title: 'Sub Menu Item Two',
        path: 'level-2/2',
      }] as IMenuItem[]
    }, {
      icon: 'android',
      title: 'Menu Item Three',
      path: 'three',
      children: [{
        title: 'Sub Menu Item One',
        path: 'level-2/1',
      }, {
        title: 'Sub Menu Item Two',
        path: 'level-2/2',
      }] as IMenuItem[]
    }
  ] as IMenuItem[];

  themes = [
    {
      name: 'default',
      className: 'default-theme',
      colors: ['', 'primary', 'secondary', 'accent', 'warn'],
      link: 'https://materialtheme.arcsine.dev/?c=YHBhbGV0dGU$YHByaW1hcnk$YF48IzMzODVjYyIsIj9lcjwjYzJkYWYwIiwiO2VyPCMyMDY4Yjl$LCIlPmBePCM3YWJkZDYiLCI~ZXI8I2Q3ZWJmMyIsIjtlcjwjNWRhNmM2fiwid2Fybj5gXjwjZmYwMDAwIiwiP2VyPCNmZmIzYjMiLCI7ZXI8I2ZmMDAwMH4sIj9UZXh0PCMwMDAwMDAiLCI~PTwjZmFmYWZhIiwiO1RleHQ8I2ZmZmZmZiIsIjs9PCMyYzJjMmN$LCJmb250cz5bYEA8KC00fixgQDwoLTN$LGBAPCgtMn4sYEA8KC0xfixgQDxoZWFkbGluZX4sYEA8dGl0bGV$LGBAPHN1YiktMn4sYEA8c3ViKS0xfixgQDxib2R5LTJ$LGBAPGJvZHktMX4sYEA8YnV0dG9ufixgQDxjYXB0aW9ufixgQDxpbnB1dCIsInNpemU$bnVsbH1dLCJpY29uczxGaWxsZWQiLCI~bmVzcz50cnVlLCJ2ZXJzaW9uPjEyfQ==',
      subThemeLink: 'https://materialtheme.arcsine.dev/?c=YHBhbGV0dGU$YHByaW1hcnk$YF48I2EwYjJjMiIsIj9lcjwjZTNlOGVkIiwiO2VyPCM4NDk5YWN$LCIlPmBePCNkNWQ3ZDgiLCI~ZXI8I2YyZjNmMyIsIjtlcjwjYzRjN2M4fiwid2Fybj5gXjwjZmYwMDAwIiwiP2VyPCNmZmIzYjMiLCI7ZXI8I2ZmMDAwMH4sIj9UZXh0PCMwMDAwMDAiLCI~PTwjZmFmYWZhIiwiO1RleHQ8I2ZmZmZmZiIsIjs9PCMyYzJjMmN$LCJmb250cz5bYEA8KC00fixgQDwoLTN$LGBAPCgtMn4sYEA8KC0xfixgQDxoZWFkbGluZX4sYEA8dGl0bGV$LGBAPHN1YiktMn4sYEA8c3ViKS0xfixgQDxib2R5LTJ$LGBAPGJvZHktMX4sYEA8YnV0dG9ufixgQDxjYXB0aW9ufixgQDxpbnB1dCIsInNpemU$bnVsbH1dLCJpY29uczxGaWxsZWQiLCI~bmVzcz50cnVlfQ=='
    },
    {
      name: 'secondary',
      className: 'secondary-theme',
      colors: ['', 'primary', 'accent', 'warn'],
      link: 'https://materialtheme.arcsine.dev/?c=YHBhbGV0dGU$YHByaW1hcnk$YF48I2JhOGIyOSIsIj9lcjwjZWFkY2JmIiwiO2VyPCNhMzZlMTl$LCIlPmBePCNlNGU0ZTQiLCI~ZXI8I2Y3ZjdmNyIsIjtlcjwjZDlkOWQ5fiwid2Fybj5gXjwjZmY0ODAwIiwiP2VyPCNmZmM4YjMiLCI7ZXI8I2ZmMzAwMH4sIj9UZXh0PCMwMDAwMDAiLCI~PTwjZmZmYWVmIiwiO1RleHQ8I2ZmZmZmZiIsIjs9PCMzYjM1MmF$LCJmb250cz5bYEA8KC00fixgQDwoLTN$LGBAPCgtMn4sYEA8KC0xfixgQDxoZWFkbGluZX4sYEA8dGl0bGV$LGBAPHN1YiktMn4sYEA8c3ViKS0xfixgQDxib2R5LTJ$LGBAPGJvZHktMX4sYEA8YnV0dG9ufixgQDxjYXB0aW9ufixgQDxpbnB1dCIsInNpemU$bnVsbH1dLCJpY29uczxGaWxsZWQiLCI~bmVzcz50cnVlLCJ2ZXJzaW9uPjEyfQ==',
      subThemeLink: 'https://materialtheme.arcsine.dev/?c=YHBhbGV0dGU$YHByaW1hcnk$YF48IzM4OWI0NyIsIj9lcjwjYzNlMWM4IiwiO2VyPCMyNDdmMmZ$LCIlPmBePCNkMGNmY2YiLCI~ZXI8I2YxZjFmMSIsIjtlcjwjYmViZGJkfiwid2Fybj5gXjwjZmY0ODAwIiwiP2VyPCNmZmM4YjMiLCI7ZXI8I2ZmMzAwMH4sIj9UZXh0PCMwMDAwMDAiLCI~PTwjZjdlOWNkIiwiO1RleHQ8I2ZmZmZmZiIsIjs9PCMzYjM1MmF$LCJmb250cz5bYEA8KC00fixgQDwoLTN$LGBAPCgtMn4sYEA8KC0xfixgQDxoZWFkbGluZX4sYEA8dGl0bGV$LGBAPHN1YiktMn4sYEA8c3ViKS0xfixgQDxib2R5LTJ$LGBAPGJvZHktMX4sYEA8YnV0dG9ufixgQDxjYXB0aW9ufixgQDxpbnB1dCIsInNpemU$bnVsbH1dLCJpY29uczxGaWxsZWQiLCI~bmVzcz50cnVlLCJ2ZXJzaW9uPjEyfQ=='
    },
    {
      name: 'purple',
      className: 'purple',
      colors: ['', 'primary', 'accent', 'warn'],
      link: 'https://materialtheme.arcsine.dev/?c=YHBhbGV0dGU$YHByaW1hcnk$YF48IzcxM2ZjZSIsIj9lcjwjZDRjNWYwIiwiO2VyPCM1NDI5YmN$LCIlPmBePCNiMTIxZTIiLCI~ZXI8I2U4YmNmNiIsIjtlcjwjOTgxNGQ2fiwid2Fybj5gXjwjZmYwMDAwIiwiP2VyPCNmZmIzYjMiLCI7ZXI8I2ZmMDAwMH4sIj9UZXh0PCMwMDAwMDAiLCI~PTwjZmFmYWZhIiwiO1RleHQ8I2ZmZmZmZiIsIjs9PCMyYzJjMmN$LCJmb250cz5bYEA8KC00fixgQDwoLTN$LGBAPCgtMn4sYEA8KC0xfixgQDxoZWFkbGluZX4sYEA8dGl0bGV$LGBAPHN1YiktMn4sYEA8c3ViKS0xfixgQDxib2R5LTJ$LGBAPGJvZHktMX4sYEA8YnV0dG9ufixgQDxjYXB0aW9ufixgQDxpbnB1dCIsInNpemU$bnVsbH1dLCJpY29uczxGaWxsZWQiLCI~bmVzcz50cnVlLCJ2ZXJzaW9uPjEyfQ=='
    }
  ] as Theme[];
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
