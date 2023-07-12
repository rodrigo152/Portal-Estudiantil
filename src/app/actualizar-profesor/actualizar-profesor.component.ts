import  swal  from 'sweetalert2';
import { Students } from '../students';
import { StudentsSService } from '../students-s.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from '../profesor';
import { ProfesorSService } from '../profesor-s.service';
@Component({
  selector: 'app-actualizar-profesor',
  templateUrl: './actualizar-profesor.component.html',
  styleUrls: ['./actualizar-profesor.component.css']
})
export class ActualizarProfesorComponent implements OnInit{
  id:number;
  profesor:Profesor = new Profesor();
  constructor(private profesorService:ProfesorSService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.profesorService.obtenerProfesorPorId(this.id).subscribe(data =>{
      this.profesor = data;
    },error => console.log(error));
  }

  irAlaListaDeProfesor(){
    this.router.navigate(['/profesor']);
    swal('Estudiante actualizado',`El estudiante ${this.profesor.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.profesorService.actualizarProfesor(this.id,this.profesor).subscribe(data => {
      this.irAlaListaDeProfesor();
    },error => console.log(error));
  }

}
