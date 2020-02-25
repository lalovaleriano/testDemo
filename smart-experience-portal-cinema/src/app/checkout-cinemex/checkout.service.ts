import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LinkJson } from './link-json';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http:HttpClient) { }

  conectaLinkExternal(json: LinkJson) {
    console.log("esta llaamando a un metodo");
    const urlEndpoint = 'http://localhost:8080/api/linkExternalConfig';
    const httpHeaders = new HttpHeaders({
     'Content-Type': 'application/json'
    });
    console.log(json);
    return this.http.post<any>(urlEndpoint, json, { headers: httpHeaders });
  }
}
