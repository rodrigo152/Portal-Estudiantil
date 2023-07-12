import { Component, OnInit} from '@angular/core';

import {  Router } from '@angular/router';
import { CourseSService } from '../course-s.service';
import { Course } from '../course';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  course:Course[];
  ImagePath: string;
  herramienta1:string;
  notificaciones: string;
  whatsapp:string;
  user:string;
  flecha22:string;
  circulo11:string;
  circulo22:string;
  circulo33:string;
  notes1:string;
  mate:string;
  sof:string;
  negocio:string;
  software:string;
  matematicas:string;
  constructor(private courseServicio:CourseSService,private router:Router) {
    //image location
    this.ImagePath = '/assets/imagenes/certusq.png',
    this.herramienta1 = '/assets/imagenes/herramienta1.png',
    this.notificaciones = '/assets/imagenes/notificaciones.png',
    this.whatsapp = '/assets/imagenes/whatsapp.png',
    this.user = '/assets/imagenes/user.png',
    this.flecha22 = '/assets/imagenes/flecha22.png',
    this.circulo11 = '/assets/imagenes/circulo11.jpg',
    this.circulo22 = '/assets/imagenes/circulo22.jpg',
    this.circulo33 = '/assets/imagenes/circulo33.jpg',
    this.notes1 = '/assets/imagenes/notes1.jpg'
    this.mate = '/assets/imagenes/mate.jpg'
    this.sof = '/assets/imagenes/sof.jpg',
    this.negocio = '/assets/imagenes/negocio.jpg'
    this.software = '/assets/imagenes/software.jpg'
    this.matematicas = '/assets/imagenes/matematicas.jpg'
  }

  ngOnInit(): void{
    this.obtenerCourse();
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
  private obtenerCourse(){
    this.courseServicio.obtenerlistdecourse().subscribe(dato =>{
      this.course =dato;
    });
  }
}
