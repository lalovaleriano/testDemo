import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  regexp = new RegExp('^(\d|-)?(\d|,)*\.?\d*$');
  amount:number;
  referenceNumber:number;
  public isCollapsed = false;
  cierraAbre='';
   a='{';
  b=' "idClient": "idCliente357abcf",';
  c=' "amount": "180",';
  d=' "token": "eltokenesunacadenadevarioscaracteresestoessolounejemplo",';
  e=' "products": "\"[{\"id\": 0,\"name\": \"producto 2\",\"sku\": \"sku2\",\"description\": \"desc 1\",\"file\": \"imagen en formato base64",\"qty\": 23,\"price\": 250}]\"","jsonMeta": "{\"bookingNumber\": \"12345\",\"userId\": 20,\"bookingDate\": \"2020-02-20 13:24:03\"}",';
  f=' "deviceTime": "2020-02-18 14:38:05",';
  g=' "referenceNumber": "abc123"';
  h='}';
  constructor(private router:Router) { }

  ngOnInit() {
  }

  valida(str:string):string{
    if(this.isCollapsed == true){
       str='Mostrar JSON';
    }else{
       str='Cerrar JSON';
    }
    return str;
  }
  goCheckOut(){    
    if(this.amount >=13 && this.referenceNumber != null){
      localStorage.setItem('amount',this.amount.toString());
      localStorage.setItem('numberReference',this.referenceNumber.toString());
      this.router.navigate(["../checkoutcinemex"]);   
      /* console.log("entro en if"); */
      

    } else{      
      Swal.fire(
        'Algo esta mal!',
        'tiene que llenar los campos de amount y referenceNumber con datos correctos',
        'error'
      ) 
    } 
  }
}
