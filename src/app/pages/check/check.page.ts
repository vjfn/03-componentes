import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];

  data = [
    {
      name:'primary',
      selected:false
    },
    {
      name:'secondary',
      selected:true
    },
    {
      name:'tertiary',
      selected:false
    },
    {
      name:'success',
      selected:true
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick (item:any) {
    console.log(item)
  }

  verData(){
    console.log(this.data);
  }

}
