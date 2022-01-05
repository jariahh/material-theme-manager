import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from "../../projects/shared/angular-material.module";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";
import { MainComponent } from './components/main/main.component';
import {FormsModule} from "@angular/forms";
import {ThemeControllerModule} from "../../projects/theme-controller/src/app/theme-controller.module";
import { EditThemeComponent } from './components/edit-theme/edit-theme.component';
import { PaletteComponent } from './components/edit-theme/palette/palette.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        EditThemeComponent,
        PaletteComponent,
    ],
    imports: [
        AngularMaterialModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        ThemeControllerModule,
        AgGridModule,
        ColorPickerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
