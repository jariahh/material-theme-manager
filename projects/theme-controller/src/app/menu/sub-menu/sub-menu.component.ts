import {Component, Input, OnInit} from '@angular/core';
import {IMenuItem} from "../IMenuItem";

@Component({
  selector: 'theme-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {
  @Input() menu: IMenuItem[] = []
  @Input() basePath = ''
  constructor() { }

  ngOnInit(): void {
  }

}
