import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetComponent implements OnInit {
  color$ = new BehaviorSubject<'primary' | 'accent' | 'warn' | null>(null);
  @Input() set color(value: 'primary' | 'accent' | 'warn' | null){
    this.color$.next(value);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
