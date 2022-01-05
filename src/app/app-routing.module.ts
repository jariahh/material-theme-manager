import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EditThemeComponent } from './components/edit-theme/edit-theme.component';
import {MainComponent} from './components/main/main.component';

const routes: Routes = [{
  path: 'edit-theme',
  component: EditThemeComponent
},{
  path: 'main',
  component: MainComponent,
  loadChildren: () => import('projects/main/src/app/app.module').then(m => m.AppModule),
}, {
  path: '**',
  redirectTo: 'main'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
