import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fallido',
  templateUrl: './fallido.component.html',
  styleUrls: ['./fallido.component.css']
})
export class FallidoComponent implements OnInit {

  constructor(private router:Router) { }
  public isCollapsed = true;
  jsonRespuesta:string = '{"idClient": "idCliente357abcf","amount": "100.10","token": "eltokenesunacadenadevarioscaracteresestoessolounejemplo","products": "\"[{\"id\": 0,\"name\": \"producto 2\",\"sku\": \"sku2\",\"description\": \"desc 1\",\"file\": \"imagen en formato base64",\"qty\": 23,\"price\": 250}]\"","jsonMeta": "{\"bookingNumber\": \"12345\",\"userId\": 20,\"bookingDate\": \"2020-02-20 13:24:03\"}","deviceTime": "2020-02-18 14:38:05","referenceNumber": "abc123"}';
  a='{';
  b=' "timestamp": "2020-02-21T19:10:37.894+0000",';
  c=' "status": 500,';
  d=' "error": "Internal Server Error",';
  e=' "message": "Cuenta no válida",';
  f=' "path": "/link/checkout"';
  g='}';
  takeAmount :string;
  takeNumberReference:string;



  ngOnInit() {
    this.takeAmount = localStorage.getItem('amount');
    this.takeNumberReference = localStorage.getItem('numberReference');
  }
  regresarPrimerPantalla(){
    this.router.navigate(["../checkoutcinemex"]);    
  }
  redirecciona(){  
    Swal.fire({
      icon: 'info',
      title: 'JSON de Respuesta',
      text: this.jsonRespuesta            
    })
  }

}
