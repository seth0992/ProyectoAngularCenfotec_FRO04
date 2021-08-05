import { Component, OnInit } from '@angular/core';
import { SAlertService } from '../s-alert.service';

@Component({
  selector: 'app-introservicios',
  templateUrl: './introservicios.component.html',
  styleUrls: ['./introservicios.component.css']
})
export class IntroserviciosComponent implements OnInit {

  constructor(private datos:SAlertService) { }

  ngOnInit(): void {
  }
  mostrarMensaje(){
    this.datos.mostrarMensaje("Estamos construyendo algo genial");
  }
}
