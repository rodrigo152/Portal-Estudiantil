import { Profesor } from '../profesor';
import { Router } from '@angular/router';
import { ProfesorSService } from '../profesor-s.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-profesor',
  templateUrl: './registrar-profesor.component.html',
  styleUrls: ['./registrar-profesor.component.css']
})
export class RegistrarProfesorComponent implements OnInit{
  profesor : Profesor = new Profesor();
  constructor(private profesorServicio:ProfesorSService, private router:Router) { }

  ngOnInit(): void {

  }
  guardarProfesor(){
    this.profesorServicio.registrarProfesor(this.profesor).subscribe(data=>{
      console.log(data);
      this.irAlaListaDeProfesor();
  }, error => console.log(error));
}
irAlaListaDeProfesor(){
  this.router.navigate(['/profesor']);
  swal('Empleado registrado',`El empleado ${this.profesor.nombre} ha sido registrado con exito`,`success`);
}
  onSubmit(){
    this.guardarProfesor();
  }

}
