import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherSalaryHistoryPage } from './teacher-salary-history.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherSalaryHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherSalaryHistoryPageRoutingModule {}
