import {Component, Input, OnInit} from '@angular/core';
import {IMenuItem} from "./IMenuItem";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() isOpen = false;
  @Input() menu: IMenuItem[]= [];
  @Input() level = 0;
  @Input() basePath = '';
  @Input() isIconMenu = false;
  constructor() { }

  ngOnInit(): void {
  }

}
