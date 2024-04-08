import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {



  constructor( private modalController: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal() {

    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps:{
        nombre: 'Victor',
        pais: 'España'
      }
    });

    await modal.present();
    //se ejecuta cuando termine la animacion de dismiss
    const {data} = await modal.onDidDismiss();
/*     //Se ejecuta en cuanto se pulsa el boton
    const {data} = await modal.onDidDismiss(); */

    console.log('onDidDismiss')

    console.log(data);
  }


}
