import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/main/main.component';

const routes: Routes = [{
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
