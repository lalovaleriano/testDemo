import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CheckoutCinemexComponent} from './checkout-cinemex/checkout-cinemex.component';
import { DetalleComponent } from './detalle/detalle.component';



const routes: Routes = [
  {path: '', component: CheckoutCinemexComponent, pathMatch: 'full'},
  { path: 'checkoutcinemex', component: CheckoutCinemexComponent },
  { path: 'detalle', component: DetalleComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
