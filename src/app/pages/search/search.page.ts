import { Component, OnInit } from '@angular/core';
import { SearchbarChangeEventDetail } from '@ionic/angular';
import { IonSearchbarCustomEvent } from '@ionic/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes: any[] = [];
  textoBuscar: string = "";


  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe(albumes =>{

      console.log(albumes)
      this.albumes = albumes;
    });
  }

  onSearchChange(event:any) {
    this.textoBuscar = event.detail.value;
  }
}
