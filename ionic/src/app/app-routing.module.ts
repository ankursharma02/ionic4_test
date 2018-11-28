import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
 
  { path: 'tickethandle', loadChildren: './tickethandle/tickethandle.module#TickethandlePageModule' },
  { path: 'loadtab1', loadChildren: './loadtab1/loadtab1.module#Loadtab1PageModule' },
  { path: 'unloadtab2', loadChildren: './unloadtab2/unloadtab2.module#Unloadtab2PageModule' },
  { path: 'ticket', loadChildren: './ticket/ticket.module#TicketPageModule' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
