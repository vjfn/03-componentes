import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';
import { Componente } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes!: Observable<Componente[]>;

  constructor( private dataService:DataService){}

  ngOnInit() {
    this.componentes = this.dataService.getMenuOptions();
  }

}
