import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { IonicPage, Nav} from 'ionic-angular';
import { Unloadtab2Page } from '../unloadtab2/unloadtab2.page';
import { Loadtab1Page } from '../loadtab1/loadtab1.page';
import { Platform } from '@ionic/angular';
@IonicPage()
@Component({
  selector: 'page-tickethandle',
  template: `
  <ion-header>
  
</ion-header>
<ion-content>
</ion-content>
`
})
export class TickethandlePage implements OnInit {
  @ViewChild(Nav) nav: Nav;

  constructor(@Inject(Platform) platform) { 
    platform.ready().then(() => {

    });
  }

  ngOnInit() {
  }

}


@Component({
  template: `
    <ion-tabs tabsPlacement="top" class="tabs-basic">
      <ion-tab tabTitle="LOAD">
      <ion-router-outlet name="Loadtab1Page"></ion-router-outlet>
      </ion-tab>
      <ion-tab tabTitle="UNLOAD">
      <ion-router-outlet name="Unloadtab2Page"></ion-router-outlet>
      </ion-tab>

    </ion-tabs>
`})
export class BasicPage {
  rootPage1 = Loadtab1Page;
  rootPage2 = Unloadtab2Page;
  constructor() {}
}