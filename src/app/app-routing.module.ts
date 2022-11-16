import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Total Salud/home/home.component';
import { TopHeadComponent } from './Total Salud/top-head/top-head.component';
import { TrayectoriaComponent } from './Total Salud/trayectoria/trayectoria.component';
import { ConveniosComponent } from './Total Salud/convenios/convenios.component';
import { AboutUsComponent } from './Total Salud/about-us/about-us.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'historia', component: TrayectoriaComponent},
  {path: 'convenios', component: ConveniosComponent},
  {path: 'sobre-nosotros', component: AboutUsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
