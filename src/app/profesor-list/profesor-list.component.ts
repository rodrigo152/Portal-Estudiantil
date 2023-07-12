
import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Profesor } from '../profesor';
import { ProfesorSService } from '../profesor-s.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-profesor-list',
  templateUrl: './profesor-list.component.html',
  styleUrls: ['./profesor-list.component.css']
})
export class ProfesorListComponent implements OnInit{
  profesor:Profesor[];
  constructor(private profesorServicio:ProfesorSService, private router:Router) { }

  ngOnInit(): void{
    this.obtenerProfesor();
}
registrarProfesor(){
  this.router.navigate(['registrar-profesor']);
}
actualizarProfesor(id:number){
  this.router.navigate(['actualizar-profesor', id]);
}

eliminarProfesor(id: number){
  swal({
    title: '¿Estas seguro?',
    text: "Confirma si deseas eliminar al empleado",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si , elimínalo',
    cancelButtonText: 'No, cancelar',
    confirmButtonClass: 'btn btn-success',
    cancelButtonClass: 'btn btn-danger',
    buttonsStyling: true
  }).then((result) => {
    if(result.value){
  this.profesorServicio.eliminarProfesor(id).subscribe(dato =>{
    console.log(dato);
    this.obtenerProfesor();
    swal(
      'Estudiante eliminado',
      'El estudiante ha sido eliminado con exito',
      'success'
    )
  })
}
})
}



private obtenerProfesor(){
  this.profesorServicio.obtenerlistdeprofesor().subscribe(dato =>{
    this.profesor =dato;
  });
}
}
