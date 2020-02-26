import { Component, OnInit } from '@angular/core';
import { faCheck, faVideo, faPen } from '@fortawesome/free-solid-svg-icons';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { LinkJson } from './link-json';
import { CheckoutService } from './checkout.service';
import { FormsModule } from '@angular/forms';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { Status } from './status';
/* import {CheckoutServiceService} from '../checkout/checkout-service.service';
import {LinkJson} from '../checkout/link-json'; */

@Component({
  selector: 'app-checkout-cinemex',
  templateUrl: './checkout-cinemex.component.html',
  styleUrls: ['./checkout-cinemex.component.css']
})
export class CheckoutCinemexComponent implements OnInit {

  
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

  constructor(
    private router:Router,
    private checkoutServiceService: CheckoutService,
     private sanitizer: DomSanitizer   
      ) { }

  ngOnInit() {
  }

  llamaalgo(){
    if(this.seleccionado == null){
      Swal.fire(
        'Algo esta mal!',
        'tiene que elegir un status!',
        'error'
      )

    }else if(this.seleccionado.localeCompare('Exitoso')===0){      
      console.log("escogiste exitoso");
      this.flagNumber =1;      

    } else if(this.seleccionado.localeCompare('Fallido')===0){
      console.log('fallido');
      this.flagNumber=2;

    } else if(this.seleccionado.localeCompare('Rechazado')===0){
      console.log('escogiste rechazado');
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
        /* Read more about handling dismissals below */
        /* if (result.dismiss === Swal.DismissReason.timer) {
          
        } */
      });
            
      let  test = 1;
  }

  checkout() {    
    if(this.flagNumber===1){
      this.flagNumber2=1;
      this.flagConfirmar = 1;
      console.log('aqui esta exitoso');

    }else if(this.flagNumber ===2){
      this.flagNumber2=2;
      this.flagConfirmar = 1;

    }else if(this.flagNumber===3){
      this.flagNumber2=3;
      this.flagConfirmar = 1;
    }else{
      Swal.fire(
        'Algo esta mal!',
        'tiene que elegir un status!',
        'error'
      )
    }
  }
  pagar(){
    if(this.flagConfirmar===1){
      if(this.fechaModel == null|| this.nombreTarjeta ==null
         || this.numeroTarjeta == null || this.cvv== null){
        Swal.fire(
          'Algo esta mal!',
          'debe llenar todos los campos de pago!',
          'error'
        )          
      }else{
      if(this.flagNumber2===1){      
        this.objStatus = new Status();
        this.objStatus.fecha = this.fechaModel;
        this.objStatus.nombre = this.nombreTarjeta;
        this.objStatus.numero = this.numeroTarjeta;
        this.objStatus.cvv = this.cvv;

        this.objStatus.titulo = 'Aves de Presa';
        this.objStatus.clasificacion= 'B15';
        this.objStatus.version= 'Español, Tradicional';
        this.objStatus.horario= 'Jueves 5 de Marzo';
        this.objStatus.cine= '02:05 PM';
        this.objStatus.sala= 'Cinemex Centro Telmex';

        this.alerta();
        this.router.navigate(["../detalle"]);              
  
      }else if (this.flagNumber2===2){
        this.router.navigate(["../fallida"]);
        console.log("mandar a detalle fallida");
  
      }else if(this.flagNumber2===3){        
        this.router.navigate(["../rechazado"]);
        console.log("mandar a detalle rechazo");   
  
      }else{
        Swal.fire(
          'Algo esta mal!',
          'tiene que elegir un status!',
          'error'
        )
      }  
    }
    }else{
      Swal.fire(
        'Algo esta mal!',
        'tiene que confirmar!',
        'error'
      )

    }
     
  }

  showInputBoletoAdulto() {
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
  }
}