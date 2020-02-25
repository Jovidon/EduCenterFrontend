import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutStudentPage } from './about-student.page';

const routes: Routes = [
  {
    path: '',
    component: AboutStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutStudentPageRoutingModule {}
