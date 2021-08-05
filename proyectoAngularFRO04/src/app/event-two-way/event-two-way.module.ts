import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventTWComponent } from './event-tw/event-tw.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EventTWComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],exports:[
    EventTWComponent
  ]
})
export class EventTwoWayModule { }
