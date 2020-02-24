import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CheckoutCinemexComponent} from './checkout-cinemex/checkout-cinemex.component';



const routes: Routes = [
  {path:'',redirectTo:'checkoutcinemex', pathMatch:'full'},
  { path: 'checkoutcinemex', component: CheckoutCinemexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
