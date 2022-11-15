import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Total Salud/home/home.component';
import { TopHeadComponent } from './Total Salud/top-head/top-head.component';
import { TrayectoriaComponent } from './Total Salud/trayectoria/trayectoria.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'historia', component: TrayectoriaComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
