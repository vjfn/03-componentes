import { Component, OnInit } from '@angular/core';
import { IonicModule, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent  implements OnInit {

  items = Array(40);

  constructor(private popoverControler: PopoverController) { }

  ngOnInit() {}

  onClick(valor:number){
    console.log(valor)

    this.popoverControler.dismiss({
      item: valor
    });



  }

}
