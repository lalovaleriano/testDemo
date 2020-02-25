import { Component, OnInit } from '@angular/core';
import { Status } from '../checkout-cinemex/status';
import { Router } from '@angular/router'
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


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
    state:string = 'false';
    fecha:string;
    nombre:string;
    numero:string;
    cvv:string;
    public isCollapsed = true;

  constructor(
    private router:Router,    
    
  ) { }

  ngOnInit() {    
  }
  ver(modal){
    console.log("manda un modal");
    this.modalService.open(modal);

  }
  animateMe(){
    this.state = (this.state=== 'small'?'large':'small');
  }

  regresarPrimerPantalla(){

    console.log("esta regresando a la primer pantalla");
    this.router.navigate(["../checkoutcinemex"]);    

  }
  getObjStatusforDetails(objStatus:Status){
    this.fecha = objStatus.fecha;    
  }

}
