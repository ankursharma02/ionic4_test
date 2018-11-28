import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Unloadtab2Page } from './unloadtab2.page';

const routes: Routes = [
  {
    path: 'Unloadtab2Page',
    component: Unloadtab2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Unloadtab2Page]
})
export class Unloadtab2PageModule {}
