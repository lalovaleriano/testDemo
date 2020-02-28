import { Component, OnInit } from '@angular/core';
import { Status } from '../checkout-cinemex/status';
import { Router } from '@angular/router'
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
  animations:[
    trigger('myfirst',[
    state('small',style({height:'0px'}) ),
    state('large',style({height:'100px'}) ),

    transition('small <=> large',animate('400ms ease-in'))

    ])
  ]
})
export class DetalleComponent implements OnInit {  
  jsonRespuesta:string = '{"message": "Aprobada","operation": "","id": null}';
  a='{';
  b='  "message": "Aprobada",';
  c='  "operation": "",';
  d='  "id": null';
  e='}';


    state:string = 'false';
    fecha:string;
    nombre:string;
    numero:string;
    cvv:string;
    referenceNumber:string;
    takeAmount :string;
    takeNumberReference:string;
    public isCollapsed = true;


  constructor(
    private router:Router,    
    private modalService:NgbModal
    
  ) { }

  ngOnInit() {    
    this.takeAmount = localStorage.getItem('amount');
    this.takeNumberReference = localStorage.getItem('numberReference');

  }
redirecciona(){  
  Swal.fire({
    icon: 'info',
    title: 'JSON de Respuesta',
    text: '{"message": "Aprobada","operation": "","id": null}',        
  })
}

  ver(modal){    
    this.modalService.open(modal);

  }
  animateMe(){
    this.state = (this.state=== 'small'?'large':'small');
  }

  regresarPrimerPantalla(){    
    this.router.navigate(["../checkoutcinemex"]);    

  }
  getObjStatusforDetails(objStatus:Status){
    this.fecha = objStatus.fecha;    
  }

}

