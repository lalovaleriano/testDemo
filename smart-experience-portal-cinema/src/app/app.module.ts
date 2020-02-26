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
import { BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import { JsonComponent } from './json/json.component';
import { FallidoComponent } from './fallido/fallido.component';
import { RechazadoComponent } from './rechazado/rechazado.component';



@NgModule({
  declarations: [
    
    AppComponent,    
    CheckoutCinemexComponent, DetalleComponent, JsonComponent, FallidoComponent, RechazadoComponent,
    
  ],
  imports: [    
    BrowserAnimationsModule,
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
