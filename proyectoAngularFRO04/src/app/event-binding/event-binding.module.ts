import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventBindComponent } from './event-bind/event-bind.component';



@NgModule({
  declarations: [
    EventBindComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    EventBindComponent
  ]
})
export class EventBindingModule { }
