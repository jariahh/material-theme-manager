import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { AutocompleteComponent } from './mat-components/autocomplete/autocomplete.component';
import { CheckboxComponent } from './mat-components/checkbox/checkbox.component';

const routes: Routes = [{
    path: '',
    component: ComponentsComponent,
    children:[
        { component: AutocompleteComponent, path: 'autocomplete' },
        { component: CheckboxComponent, path: 'checkbox' },
        // { component: 'Datepicker', path: 'datepicker' },
        // { component: 'Native Date', path: 'native-date' },
        // { component: 'Form Field', path: 'form-field' },
        // { component: 'Input', path: 'input' },
        // { component: 'Radio', path: 'radio' },
        // { component: 'Select', path: 'select' },
        // { component: 'Slider', path: 'slider' },
        // { component: 'Slide Toggle', path: 'slide-toggle' },
        // { component: 'Menu', path: 'menu' },
        // { component: 'Sidenav', path: 'sidenav' },
        // { component: 'Toolbar', path: 'toolbar' },
        // { component: 'Card', path: 'card' },
        // { component: 'Divider', path: 'divider' },
        // { component: 'Expansion', path: 'expansion' },
        // { component: 'GridList', path: 'gridlist' },
        // { component: 'List', path: 'list' },
        // { component: 'Stepper', path: 'stepper' },
        // { component: 'Tabs', path: 'tabs' },
        // { component: 'Tree', path: 'tree' },
        // { component: 'Button', path: 'button' },
        // { component: 'Button Toggle', path: 'button-toggle' },
        // { component: 'Badge', path: 'badge' },
        // { component: 'Chips', path: 'chips' },
        // { component: 'Icon', path: 'icon' },
        // { component: 'Progress Spinner', path: 'progress-spinner' },
        // { component: 'Progress Bar', path: 'progress-bar' },
        // { component: 'Ripple', path: 'ripple' },
        // { component: 'Bottom Sheet', path: 'bottom-sheet' },
        // { component: 'Dialog', path: 'dialog' },
        // { component: 'Snack Bar', path: 'snack-bar' },
        // { component: 'Tooltip', path: 'tooltip' },
        // { component: 'Paginator', path: 'paginator' },
        // { component: 'Sort', path: 'sort' },
        // { component: 'Table', path: 'table' },
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
