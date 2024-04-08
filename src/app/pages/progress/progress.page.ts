import { Component, OnInit } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  public progress = 0;

  public progress2 = 0;
  public buffer = 0.06;
  porcentaje: number = 0.00;




  constructor() {

    setInterval(() => {
      this.progress += 0.01;

      // Reinicia el progreso al 100%
      // para hacer la demo contínuamente

      //los valores de la barra van de 0 a 1
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 1000);
      }
    }, 50);

    setInterval(() => {
      this.buffer += 0.06;
      this.progress2 += 0.06;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress2 > 1) {
        setTimeout(() => {
          this.buffer = 0.06;
          this.progress2 = 0;
        }, 1000);
      }
    }, 1000);


  }

  pinFormatter(value: number) {
    return `${value}%`;
  }


  ngOnInit() {
  }

  onIonChange(ev: Event) {
    if (ev instanceof CustomEvent) {
      const value = (ev as CustomEvent).detail.value;
      console.log('ionChange emitted value:', value);
      this.porcentaje = value * 0.01;
    }
  }

}
