import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SAlertService {

  constructor() { }

  mostrarMensaje(mensaje:string){
    alert(mensaje);
  }
}
