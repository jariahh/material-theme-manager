import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../../../shared/angular-material.module';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { AutocompleteComponent } from './mat-components/autocomplete/autocomplete.component';
import { CheckboxComponent } from './mat-components/checkbox/checkbox.component';


@NgModule({
    declarations: [
        AutocompleteComponent,
        ComponentsComponent,
        CheckboxComponent
    ],
    imports: [
        CommonModule,
        ComponentsRoutingModule,
        AngularMaterialModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class ComponentsModule { }
