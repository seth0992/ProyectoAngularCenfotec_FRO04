import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent implements OnInit {

  servicios:string[] = ["Desarrollo Web","Programación I"];

  constructor() { }

  ngOnInit(): void {
  }

  agregarServicio(nuevoServicio:any){
    this.servicios.push(nuevoServicio.value);
    nuevoServicio.value = '';
    nuevoServicio.focus();
    return false;
  }
  servicioTW:string= "Desarrollo";
}
