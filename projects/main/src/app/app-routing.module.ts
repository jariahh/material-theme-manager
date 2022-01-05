import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [{
  path: '',
  component: AppComponent
}, {
    path: 'components',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
