import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherSalaryHistoryPageRoutingModule } from './teacher-salary-history-routing.module';

import { TeacherSalaryHistoryPage } from './teacher-salary-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherSalaryHistoryPageRoutingModule
  ],
  declarations: [TeacherSalaryHistoryPage]
})
export class TeacherSalaryHistoryPageModule {}
