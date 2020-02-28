import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CheckoutCinemexComponent} from './checkout-cinemex/checkout-cinemex.component';
import { DetalleComponent } from './detalle/detalle.component';
import { JsonComponent } from './json/json.component';
import { FallidoComponent } from './fallido/fallido.component';
import { RechazadoComponent } from './rechazado/rechazado.component';
import { InicioComponent } from './inicio/inicio.component';



const routes: Routes = [
  {path: '', component: InicioComponent, pathMatch: 'full'},
  {path:'inicio',component: InicioComponent},
  { path: 'checkoutcinemex', component: CheckoutCinemexComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'json', component: JsonComponent },
  { path: 'fallida', component: FallidoComponent },
  { path: 'rechazado', component: RechazadoComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
