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
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { UbicacionComponent } from './Total Salud/ubicacion/ubicacion.component';
import { ComunidadComponent } from './Total Salud/comunidad/comunidad.component';
import { AvisoPComponent } from './Total Salud/aviso-p/aviso-p.component';
import { EstudiosComponent } from './Total Salud/estudios/estudios.component';
import { MainVideosComponent } from './Total Salud/main-videos/main-videos.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { FormWhatsComponent } from './Total Salud/form-whats/form-whats.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PromocionesComponent } from './Total Salud/promociones/promociones.component';

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
    AboutUsComponent,
    UbicacionComponent,
    ComunidadComponent,
    AvisoPComponent,
    EstudiosComponent,
    MainVideosComponent,
    FormWhatsComponent,
    PromocionesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    MdbCarouselModule,
    NgxPageScrollCoreModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
