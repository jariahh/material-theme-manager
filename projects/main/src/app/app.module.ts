import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";
import {AngularMaterialModule} from "../../../shared/angular-material.module";
import { WidgetComponent } from './widget/widget.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        WidgetComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        AngularMaterialModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
