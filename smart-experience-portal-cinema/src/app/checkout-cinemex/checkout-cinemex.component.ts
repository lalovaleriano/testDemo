import { Component, OnInit } from '@angular/core';
import { faCheck, faVideo, faPen } from '@fortawesome/free-solid-svg-icons';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { LinkJson } from './link-json';
import { CheckoutService } from './checkout.service';
import { FormsModule } from '@angular/forms';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
/* import {CheckoutServiceService} from '../checkout/checkout-service.service';
import {LinkJson} from '../checkout/link-json'; */

@Component({
  selector: 'app-checkout-cinemex',
  templateUrl: './checkout-cinemex.component.html',
  styleUrls: ['./checkout-cinemex.component.css']
})
export class CheckoutCinemexComponent implements OnInit {

  

  flagNumber:number;
  flagNumber2:number;
  testUrl :string = './test.html';
  lista2:any[]=[
    {id:1,status:'Exitoso'},
    {id:21,status:'Fallido'},
    {id:3,status:'Rechazado'}
  ];
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
  exitoso(){      
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
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      });
            
      let  test = 1;
  }

  checkout() {    
    if(this.flagNumber===1){
      this.flagNumber2=1;
      console.log('aqui esta exitoso');

    }else if(this.flagNumber ===2){
      this.flagNumber2=2;

    }else if(this.flagNumber===3){
      this.flagNumber2=3;
    }else{
      Swal.fire(
        'Algo esta mal!',
        'tiene que elegir un status!',
        'error'
      )
    }
  }
  pagar(){
    if(this.flagNumber2===1){
      this.alerta();
      this.router.navigate(["../detalle"]);      
      console.log("mandar a detalle ok");
    }else if (this.flagNumber2===2){
      this.router.navigate(["../detalle"]);      
      console.log("mandar a detalle fallida");

    }else if(this.flagNumber2===3){
      this.router.navigate(["../detalle"]);   
      console.log("mandar a detalle rechazo");   

    }else{
      Swal.fire(
        'Algo esta mal!',
        'tiene que elegir un status!',
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