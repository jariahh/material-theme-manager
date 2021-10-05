import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {LayoutComponent} from "./layout/layout.component";
import {MenuComponent} from "./menu/menu.component";
import {SubMenuComponent} from "./menu/sub-menu/sub-menu.component";
import {ThemeThumbnailComponent} from "./layout/theme-thumbnail/theme-thumbnail.component";
import {RouterModule} from "@angular/router";
import {AngularMaterialModule} from "../../../shared/angular-material.module";
import {FormsModule} from "@angular/forms";
import {ThemeService} from "./theme.service";

@NgModule({
  declarations: [
    LayoutComponent,
    ThemeThumbnailComponent,
    MenuComponent,
    SubMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AngularMaterialModule,
    FormsModule
  ],
  exports: [
    LayoutComponent,
    MenuComponent,
    SubMenuComponent
  ],
  providers: []
})
export class ThemeControllerModule { }
