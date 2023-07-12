import  swal  from 'sweetalert2';
import { CourseSService } from './../course-s.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{
  id:number;
  course:Course;
  ImagePath: string;
  herramienta1:string;
  notificaciones: string;
  whatsapp:string;
  user:string;
  flecha22:string;
  circulo11:string;
  circulo22:string;
  circulo33:string;
  constructor(private courseServicio:CourseSService,private router:Router,private route:ActivatedRoute) {
    //image location
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
ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.course = new Course();
  this.courseServicio.obtenerCoursePorId(this.id).subscribe(data => {
    this.course = data;
    swal(`Detalles del empleado ${this.course.nombre}`);
  });
}
listam(){
  this.router.navigate(['/students']);
}
listap(){
  this.router.navigate(['/profesor']);
}
home(){
  this.router.navigate(['/home']);
}

}
