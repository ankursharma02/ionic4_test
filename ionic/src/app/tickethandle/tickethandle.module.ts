import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TickethandlePage, BasicPage } from './tickethandle.page';
import { IonicPageModule } from 'ionic-angular';

const routes: Routes = [
  {
    path: '',
    component: TickethandlePage
  },
  {
    path: '',
    component: BasicPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicPageModule.forChild(BasicPage)
    
  ],
  declarations: [TickethandlePage,BasicPage]
})
export class TickethandlePageModule {}
