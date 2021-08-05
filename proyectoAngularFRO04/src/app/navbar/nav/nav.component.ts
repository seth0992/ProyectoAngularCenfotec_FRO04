import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  elementos:string[] = ["Inicio","Acerca","Servicios","Portafolio","Contáctenos"]
  constructor() { }

  claseVisible:boolean = false

  ngOnInit(): void {
    this.claseVisible = false
  }

  toogleNav():void{
    this.claseVisible = !this.claseVisible ? true : false
  }
}
