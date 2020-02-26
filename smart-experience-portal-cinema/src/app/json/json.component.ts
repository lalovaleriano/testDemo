import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  constructor(private router:Router) { }
  text:string= '"{ "timestamp": "2020-02-21T19:10:37.894+0000","status": 500,"error": "Internal Server Error","message": "Cuenta no válida","path": "/link/checkout"}';

  ngOnInit() {
  }
  regresa(){
    /* alert(this.text); */
    this.router.navigate(["../detalle"]);      

  }

}
