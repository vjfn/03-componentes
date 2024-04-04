import { Component, OnInit } from '@angular/core';
import { IonAlertCustomEvent,OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  
  setResult($event: IonAlertCustomEvent<OverlayEventDetail<any>>) {
    throw new Error('Method not implemented.');
  }

  alertButtons = ['Action'];
  public multiAlertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];



  constructor() { }

  ngOnInit() {
  }

}
