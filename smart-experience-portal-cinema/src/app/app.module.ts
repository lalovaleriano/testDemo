import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule} from '@angular/forms';
import { CheckoutCinemexComponent } from './checkout-cinemex/checkout-cinemex.component';
import { CountdownModule } from 'ngx-countdown';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [
    AppComponent,    
    CheckoutCinemexComponent, DetalleComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FontAwesomeModule,
    FormsModule,
    CountdownModule
  ],
  providers: [    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
