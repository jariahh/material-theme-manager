import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from "../../projects/shared/angular-material.module";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";
import { MainComponent } from './components/main/main.component';
import {FormsModule} from "@angular/forms";
import {ThemeControllerModule} from "../../projects/theme-controller/src/app/theme-controller.module";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ThemeControllerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
