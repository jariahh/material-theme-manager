import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Theme } from '../../../../projects/theme-controller/src/app/layout/theme-thumbnail/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
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
  constructor() { }

  public getThemes() {
    return of(this.themes);
  }
}
