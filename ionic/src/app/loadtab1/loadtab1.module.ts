import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Loadtab1Page } from './loadtab1.page';

const routes: Routes = [
  {
    path: 'Loadtab1Page',
    component: Loadtab1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Loadtab1Page]
})
export class Loadtab1PageModule {}
