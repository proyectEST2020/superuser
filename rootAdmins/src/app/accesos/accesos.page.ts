import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accesos',
  templateUrl: './accesos.page.html',
  styleUrls: ['./accesos.page.scss'],
})
export class AccesosPage implements OnInit {
fecha: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
