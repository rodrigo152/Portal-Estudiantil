import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  ImagePath: string;
  herramienta1:string;
  notificaciones: string;
  whatsapp:string;
  user:string;
  flecha22:string;
  circulo11:string;
  circulo22:string;
  circulo33:string

constructor(private router:Router) {
  this.ImagePath = '/assets/imagenes/certusq.png',
  this.herramienta1 = '/assets/imagenes/herramienta1.png',
  this.notificaciones = '/assets/imagenes/notificaciones.png',
  this.whatsapp = '/assets/imagenes/whatsapp.png',
  this.user = '/assets/imagenes/user.png',
  this.flecha22 = '/assets/imagenes/flecha22.png',
  this.circulo11 = '/assets/imagenes/circulo11.jpg',
  this.circulo22 = '/assets/imagenes/circulo22.jpg',
  this.circulo33 = '/assets/imagenes/circulo33.jpg'
}

ngOnInit(){

}
listam(){
  this.router.navigate(['/students']);
}
listap(){
  this.router.navigate(['/profesor']);
}
social(){
  this.router.navigate(['/social']);
}
noticias(){
  this.router.navigate(['/noticias']);
}
detalle(id:number){
  this.router.navigate(['/detalle',id]);
}

}
