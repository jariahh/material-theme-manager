import { Component } from '@angular/core';

@Component({
  selector: 'app-main-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'main';
  color: 'primary' | 'accent' | 'warn' | null = null;
}
