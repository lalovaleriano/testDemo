import { Component, OnInit } from '@angular/core';
import { faCheck, faVideo, faPen } from '@fortawesome/free-solid-svg-icons';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { LinkJson } from './link-json';
import { CheckoutService } from './checkout.service';
import { FormsModule } from '@angular/forms';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { Status } from './status';
import { timer } from 'rxjs';
/* import {CheckoutServiceService} from '../checkout/checkout-service.service';
import {LinkJson} from '../checkout/link-json'; */

@Component({
  selector: 'app-checkout-cinemex',
  templateUrl: './checkout-cinemex.component.html',
  styleUrls: ['./checkout-cinemex.component.css']
})
export class CheckoutCinemexComponent implements OnInit {

  nuevoTarjeta:string;
  nombreTarjeta:string;
  numeroTarjeta:string;
  fechaModel:string;
  cvv:string
  flagConfirmar:number;
  objStatus :Status;



  flagNumber:number;
  flagNumber2:number;
  testUrl :string = './test.html';  
  lista:string[]=["Exitoso","Fallido","Rechazado"];
  seleccionado:string;

  takeAmount :string;
  takeNumberReference:string;


  faVideo = faVideo;
  faCheck = faCheck;
  faPen = faPen;
  objLinkJson: LinkJson;
  linkData: SafeResourceUrl;
  boletoAdulto = 1;
  boletoMayor60 = 1;
  boletoMenor = 1;
  precioBoletoAdulto = 60.00;
  precioBoletoMayor60 = 54.00;
  precioBoletoMenor = 54.00;
  costoServicio = 12.00;
  totalBoletos = ( this.boletoAdulto * this.precioBoletoAdulto ) +
    ( this.boletoMayor60 * this.precioBoletoMayor60 ) +
    ( this.boletoMenor * this.precioBoletoMenor );
  totalPagar = this.totalBoletos + this.costoServicio;
  statusShowInputBoletoAdulto = true;
  statusShowInputBoletoMayor60 = true;
  statusShowInputBoletoMenor = true;
  servicioPrice=0;

  constructor(
    private router:Router,
    private checkoutServiceService: CheckoutService,
     private sanitizer: DomSanitizer   
      ) { }

  ngOnInit() {
    this.takeAmount = localStorage.getItem('amount');
    this.takeNumberReference = localStorage.getItem('numberReference');
    this.suma(this.takeNumberReference);    
    this.servicioPrice=(+this.takeAmount)-12;
    
  }
  suma(amount):number{
    return (12-parseFloat(amount));    
  }

  llamaalgo(){
    if(this.seleccionado == null){
      Swal.fire(
        'Algo esta mal!',
        'tiene que elegir un status!',
        'error'
      )
    }else if(this.seleccionado.localeCompare('Exitoso')===0){            
      this.flagNumber =1;            
    } else if(this.seleccionado.localeCompare('Fallido')===0){      
      this.flagNumber=2;    
    } else if(this.seleccionado.localeCompare('Rechazado')===0){      
      this.flagNumber=3;
      
    }
  }
  alerta(){
    let timerInterval
      Swal.fire({
        title: 'Procesando!',
        html: 'Porfavor espere, estamos procesando su pago',
        timer: 4000,
        timerProgressBar: true,        
        onClose: () => {
          
        }
      }).then((result) => {
        console.log("asassasasasas");
        this.router.navigate(["../detalle"]);    
        
        /* Read more about handling dismissals below */
        /* if (result.dismiss === Swal.DismissReason.timer) {          
        } */
      });
  }
  
  /* alerta2(){
    let timerInterval
      Swal.fire({
        title: 'Procesando!',
        html: 'Porfavor espere, estamos procesando su pago',
        timer: 4000,
        timerProgressBar: true,
        onBeforeOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
            const content = Swal.getContent()
            if (content) {
              const b = content.querySelector('b')              
            }
          }, 100)
        },
        onClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {              
  } */
  pagar(){    
      if(this.fechaModel == null|| this.nombreTarjeta ==null
         || this.numeroTarjeta == null || this.cvv== null){
        Swal.fire(
          'Algo esta mal!',
          'debe llenar todos los campos de pago!',
          'error'
        )          
      }else{
      if(this.flagNumber===1){      
        this.objStatus = new Status();
        this.objStatus.fecha = this.fechaModel;
        this.objStatus.nombre = this.nombreTarjeta;
        this.objStatus.numero = this.numeroTarjeta;
        this.objStatus.cvv = this.cvv;
        if(this.objStatus.numero.length<16){
          Swal.fire(
            'Algo esta mal!',
            'debe ingresar 16 digitos de su tarjeta!',
            'error'
          )          
          
          localStorage.setItem('tarjeta',this.objStatus.numero);
          
        }

        this.objStatus.titulo = 'Aves de Presa';
        this.objStatus.clasificacion= 'B15';
        this.objStatus.version= 'Español, Tradicional';
        this.objStatus.horario= 'Jueves 5 de Marzo';
        this.objStatus.cine= '02:05 PM';
        this.objStatus.sala= 'Cinemex Centro Telmex';
        console.log("este es el objeto que se llena ");
        console.log(this.objStatus);

        this.alerta();
          
                
  
      }else if (this.flagNumber===2){
        this.router.navigate(["../fallida"]);        
      }else if(this.flagNumber===3){        
        this.router.navigate(["../rechazado"]);          
      }
    }
    
     
  }
  goInicio(){
    localStorage.clear();
    this.router.navigate(["../inicio"]);
  }

/*   showInputBoletoAdulto() {
    this.statusShowInputBoletoAdulto = !this.statusShowInputBoletoAdulto;
    console.log('statusShowInputBoletoAdulto: ' + this.statusShowInputBoletoAdulto);
  }

  showInputBoletoMayor60() {
    this.statusShowInputBoletoMayor60 = !this.statusShowInputBoletoMayor60;
    console.log('statusShowInputBoletoMayor60: ' + this.statusShowInputBoletoMayor60);
  }

  showInputBoletoMenor() {
    this.statusShowInputBoletoMenor = !this.statusShowInputBoletoMenor;
    console.log('statusShowInputBoletoMenor: ' + this.statusShowInputBoletoMenor);
  }

  updateFieldBoletoAdulto(event) {
    this.boletoAdulto = event.target.value;
    this.totalBoletos = ( this.boletoAdulto * this.precioBoletoAdulto ) +
      ( this.boletoMayor60 * this.precioBoletoMayor60 ) +
      ( this.boletoMenor * this.precioBoletoMenor );
    this.totalPagar = this.totalBoletos + this.costoServicio;
  }

  updateFieldBoletoMayor60(event) {
    this.boletoMayor60 = event.target.value;
    this.totalBoletos = ( this.boletoAdulto * this.precioBoletoAdulto ) +
      ( this.boletoMayor60 * this.precioBoletoMayor60 ) +
      ( this.boletoMenor * this.precioBoletoMenor );
    this.totalPagar = this.totalBoletos + this.costoServicio;
  }

  updateFieldBoletoMenor(event) {
    this.boletoMenor = event.target.value;
    this.totalBoletos = ( this.boletoAdulto * this.precioBoletoAdulto ) +
      ( this.boletoMayor60 * this.precioBoletoMayor60 ) +
      ( this.boletoMenor * this.precioBoletoMenor );
    this.totalPagar = this.totalBoletos + this.costoServicio;FormsModule
  } */
}