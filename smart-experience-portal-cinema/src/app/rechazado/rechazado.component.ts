import { Component, OnInit, AfterViewInit, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-rechazado',
  templateUrl: './rechazado.component.html',
  styleUrls: ['./rechazado.component.css']
})
export class RechazadoComponent implements OnInit  {
  
  
  takeNumberReference:string;
  public isCollapsed = true;
  jsonRespuesta :string ='{"message": "Aprobada","operation": "","id": null}';
  constructor(private router:Router) { }

  ngOnInit() {
    
    this.takeNumberReference = localStorage.getItem('numberReference');
  }
  regresarPrimerPantalla(){
    this.router.navigate(["../checkoutcinemex"]);    
  }  

}
