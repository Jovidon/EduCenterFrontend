import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherSalaryPage } from './teacher-salary.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherSalaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherSalaryPageRoutingModule {}
