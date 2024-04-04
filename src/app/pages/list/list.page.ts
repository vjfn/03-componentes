import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
share(user: any) {
throw new Error('Method not implemented.');
}
favorite(user: any) {
throw new Error('Method not implemented.');
}
unread(user: any) {
throw new Error('Method not implemented.');
}

  usuarios!: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getUsuarios().subscribe(console.log)
    this.usuarios = this.dataService.getUsuarios();

  }

}
