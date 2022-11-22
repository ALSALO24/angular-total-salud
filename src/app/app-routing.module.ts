import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Total Salud/home/home.component';
import { TrayectoriaComponent } from './Total Salud/trayectoria/trayectoria.component';
import { ConveniosComponent } from './Total Salud/convenios/convenios.component';
import { AboutUsComponent } from './Total Salud/about-us/about-us.component';
import { UbicacionComponent } from './Total Salud/ubicacion/ubicacion.component';
import { ComunidadComponent } from './Total Salud/comunidad/comunidad.component';
import { AvisoPComponent } from './Total Salud/aviso-p/aviso-p.component';


const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'historia', component: TrayectoriaComponent},
  {path: 'convenios', component: ConveniosComponent},
  {path: 'sobre-nosotros', component: AboutUsComponent},
  {path: 'ubicacion', component: UbicacionComponent},
  {path: 'comunidad', component: ComunidadComponent},
  {path: 'avisoPrivacidad', component: AvisoPComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled'
    }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
