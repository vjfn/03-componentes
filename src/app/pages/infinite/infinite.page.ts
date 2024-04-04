import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data:any[] = Array(20);

  @ViewChild(IonInfiniteScroll) infiniteScroll !: IonInfiniteScroll; 


  constructor() { }

  ngOnInit() {
  }

  loadData() {

    if(this.data.length >= 100){
      this.infiniteScroll.complete();
      this.infiniteScroll.disabled = true;
    }


    const nuevArr = Array(20);
    this.data.push(...nuevArr);

    setTimeout(() => {
       this.infiniteScroll.complete();
    },2500);
  }

}
