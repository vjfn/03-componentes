import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {



  fechaNaci: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  cambioFecha($event: Event) {
   console.log(event)

  }


}
