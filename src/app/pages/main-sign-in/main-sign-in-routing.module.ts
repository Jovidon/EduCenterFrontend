import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainSignInPage } from './main-sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: MainSignInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainSignInPageRoutingModule {}
