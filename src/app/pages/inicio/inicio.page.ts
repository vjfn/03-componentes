import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes!: Observable<Componente[]>;

  constructor( private dataService:DataService){}

  ngOnInit() {
    this.componentes = this.dataService.getMenuOptions();
  }
/* 
  //controlador del codigo comentado en el html, opcion 2
  constructor(private menuController: MenuController) { }

  mostrarMenu(){
    this.menuController.open('first');

  } */

}
