import { Component, OnInit } from '@angular/core';
import { faCheck, faVideo, faPen } from '@fortawesome/free-solid-svg-icons';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { LinkJson } from './link-json';
import { CheckoutService } from './checkout.service';
/* import {CheckoutServiceService} from '../checkout/checkout-service.service';
import {LinkJson} from '../checkout/link-json'; */

@Component({
  selector: 'app-checkout-cinemex',
  templateUrl: './checkout-cinemex.component.html',
  styleUrls: ['./checkout-cinemex.component.css']
})
export class CheckoutCinemexComponent implements OnInit {

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

  constructor(private checkoutServiceService: CheckoutService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  checkout() {
    this.objLinkJson = new LinkJson();
    this.objLinkJson.emailPaymentNotification = 'emailPaymentNotification@Gmail.com';
    this.objLinkJson.amount = this.totalPagar;
    this.objLinkJson.products = 'products';
    this.objLinkJson.emails = 'emailPaymentNotification2@Gmail.com';
    this.objLinkJson.token = 'MIICXAIBAAKBgQCd7Y+f9iozMNVmLGCgoLNbZLhAPoyrstP5Y2TQQG+I8uY1mK83VptlXpfkGXb+4yXcxLjCcDZXB1ds94egfau032F57XNyaNfNvGxekItcyMuRzco513bjvqvCmKS7zfCyAmdyKCT3bQ1/u1zDH8Q2GEBVze6uHVlh8jiySxYCQIDAQABAoGAN8koyMp90aNYXkUixNq/QHNtmlP+ANCkjB2OCPoZ6/hRVXFfw152efJWGR7dp9+5CiofJA/X7W/ad7UHqyMhbcMhU5ai0oIuSrtKdHlxcYX+jgUpAWfCL2MECmvkYjPdf5o5WNkLuKDF1CcJ7iPwRL+kJWIJ5WHm0exVe1UZuECQQD1rPjlKCKjCUZRf+OuOnuiMYFD5quimM1a5nZa5Eqq2/QKiQiWA9mTaOnAojGNgH6GCuiZQfpmQsuUNdeGdX9AkEApJCU4kfbFqtLPQNmeB7XC3ELwOQ0hi3XD2w/swNHOS3AefhptpY+lY4w2eF9Yu6mOerupx/q2uaxzm/dm3th/QJAZtWnYbP8jtpAamu+n8s1D8spPVLu9uGamEFAIyGI8PVDjBRsxfLnSnNe9rY0T8+Vq6WXvs1dAENKIjblmD1NQJAdTgvdQctfXBwBId+U4ua434i0uCRll8qRW4QfEB2K7IPZk+47odljYUgf5mbAQGD5dSq2TGy2osGRoBxnCamQJBAKVvdzvGWMpWsglhD+S+xnQLT1HO8sPbHOBdYKJAOw+BueKHHPEWrgy5fePv4L+tvv/eXC+r7uST7tNSj';
    this.objLinkJson.meta = '';

    this.checkoutServiceService.conectaLinkExternal(this.objLinkJson).subscribe(response => {
      console.log('esta es la respuesta        ' + response);
      this.linkData = response.url;

      this.linkData = this.sanitizer.bypassSecurityTrustResourceUrl(response.url);
      console.log(response.status);
      console.log(response.url);
    });

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
    this.totalPagar = this.totalBoletos + this.costoServicio;
  }
}
