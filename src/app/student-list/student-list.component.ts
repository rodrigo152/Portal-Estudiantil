import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Students } from '../students';
import { StudentsSService } from '../students-s.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{
  student:Students[];
  constructor(private studentServicio:StudentsSService, private router:Router) { }

  ngOnInit(): void{
    this.obtenerStudents();
}
registrarStudent(){
  this.router.navigate(['registrar-students']);
}
actualizarStudent(id:number){
  this.router.navigate(['actualizar-student', id]);
}

eliminarStudent(id: number){
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
  this.studentServicio.eliminarStudent(id).subscribe(dato =>{
    console.log(dato);
    this.obtenerStudents();
    swal(
      'Estudiante eliminado',
      'El estudiante ha sido eliminado con exito',
      'success'
    )
  })
}
})
}



private obtenerStudents(){
  this.studentServicio.obtenerlistdestudents().subscribe(dato =>{
    this.student =dato;
  });
}
}
