import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { HeroBannerModule } from './hero-banner/hero-banner.module';
import { PerfilPersonalModule } from './perfil-personal/perfil-personal.module';
import { EventBindingModule } from './event-binding/event-binding.module';
import { EventTwoWayModule } from './event-two-way/event-two-way.module';
import { IntroserviciosComponent } from './introservicios/introservicios.component';
@NgModule({
  declarations: [
    AppComponent,
    IntroserviciosComponent,
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    HeroBannerModule,
    PerfilPersonalModule,EventBindingModule,
    EventTwoWayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
