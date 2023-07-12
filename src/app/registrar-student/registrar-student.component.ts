
import { Students } from '../students';
import { Router } from '@angular/router';
import { StudentsSService } from '../students-s.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  selector: 'app-registrar-student',
  templateUrl: './registrar-student.component.html',
  styleUrls: ['./registrar-student.component.css']
})
export class RegistrarStudentComponent implements OnInit{
  student : Students = new Students();
  constructor(private studentServicio:StudentsSService, private router:Router) { }

  ngOnInit(): void {

  }
  guardarStudent(){
    this.studentServicio.registrarStudent(this.student).subscribe(data=>{
      console.log(data);
      this.irAlaListaDeStudents();
  }, error => console.log(error));
}
irAlaListaDeStudents(){
  this.router.navigate(['/students']);
  swal('Empleado registrado',`El empleado ${this.student.firstName} ha sido registrado con exito`,`success`);
}
  onSubmit(){
    this.guardarStudent();
  }

}
