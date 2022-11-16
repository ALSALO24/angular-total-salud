import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Total Salud/home/home.component';
import { NavbarComponent } from './Total Salud/navbar/navbar.component';
import { CarruselComponent } from './Total Salud/carrusel/carrusel.component';
import { FooterComponent } from './Total Salud/footer/footer.component';
import { TrayectoriaComponent } from './Total Salud/trayectoria/trayectoria.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TopHeadComponent } from './Total Salud/top-head/top-head.component';
import { ConveniosComponent } from './Total Salud/convenios/convenios.component';
import { AboutUsComponent } from './Total Salud/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarruselComponent,
    FooterComponent,
    TrayectoriaComponent,
    TopHeadComponent,
    ConveniosComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
