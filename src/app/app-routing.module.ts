import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './containers/home/home.component';
import { AboutComponent } from './containers/about/about.component';
import { InfoComponent } from './containers/info/info.component';
import { RulesComponent } from './containers/rules/rules.component';

const routes: Routes = [
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'rules',
    component: RulesComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
