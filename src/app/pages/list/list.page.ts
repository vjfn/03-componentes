import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList) ionList!: IonList;


  usuarios!: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getUsuarios().subscribe(console.log)
    this.usuarios = this.dataService.getUsuarios();

  }

  share(user: any) {
    console.log('share', user);
    this.ionList.closeSlidingItems();
  }
  favorite(user: any) {
    console.log('favorite', user);
    this.ionList.closeSlidingItems();
  }
  unread(user: any) {
    console.log('unread', user);
    this.ionList.closeSlidingItems();
  }

}
