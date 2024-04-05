import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'Hulk', 'Ironman', 'Flash'];

  reorderDisabled: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any) {
    console.log(event);

    /* cortamos el elemento de la primera posicion de la nueva lista */
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];

    /* Pega el elemento en la nueva posición */
    this.personajes.splice(event.detail.to, 0, itemMover);

    /* Termina el evento de arrastrar, fijando su nueva posicion */
    event.detail.complete();
    console.log(this.personajes);


  }

}
