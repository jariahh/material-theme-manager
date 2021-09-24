import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from "./shared/angular-material.module";
import {ThemeThumbnailComponent} from "./components/layout/theme-thumbnail/theme-thumbnail.component";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";
import { MainComponent } from './components/main/main.component';
import { LayoutComponent } from './components/layout/layout.component';
import {FormsModule} from "@angular/forms";
import { MenuComponent } from './components/menu/menu.component';
import { SubMenuComponent } from './components/menu/sub-menu/sub-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeThumbnailComponent,
    MainComponent,
    LayoutComponent,
    LayoutComponent,
    MenuComponent,
    SubMenuComponent
  ],
    imports: [
        AngularMaterialModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CommonModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
