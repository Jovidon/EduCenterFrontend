import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherSalaryPageRoutingModule } from './teacher-salary-routing.module';

import { TeacherSalaryPage } from './teacher-salary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherSalaryPageRoutingModule
  ],
  declarations: [TeacherSalaryPage]
})
export class TeacherSalaryPageModule {}
