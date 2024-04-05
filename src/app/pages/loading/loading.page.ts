import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor( private liadingControler : LoadingController) { }

  loading!: HTMLIonLoadingElement;

  ngOnInit() {
  }

  mostrarLoading(){
    this.presentLoading('Hola Mundo Cargando');

    setTimeout(()=>{
      this.loading.dismiss();
    },2000);
  };
    async presentLoading (message: string){
    this.loading = await  this.liadingControler.create({
      message,
    });

    await this.loading.present();

  }


/*   async presentLoading (){
    const loading = await  this.liadingControler.create({

      message: 'Cargando...',
      duration: 2000
    });
    await loading.present();

  } */

}
