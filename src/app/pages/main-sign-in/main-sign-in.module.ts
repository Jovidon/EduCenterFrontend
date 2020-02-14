import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainSignInPageRoutingModule } from './main-sign-in-routing.module';

import { MainSignInPage } from './main-sign-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainSignInPageRoutingModule
  ],
  declarations: [MainSignInPage]
})
export class MainSignInPageModule {}
