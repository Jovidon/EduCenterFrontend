import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutStudentPageRoutingModule } from './about-student-routing.module';

import { AboutStudentPage } from './about-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutStudentPageRoutingModule
  ],
  declarations: [AboutStudentPage]
})
export class AboutStudentPageModule {}
