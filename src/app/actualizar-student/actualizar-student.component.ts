import  swal  from 'sweetalert2';
import { Students } from '../students';
import { StudentsSService } from '../students-s.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-actualizar-student',
  templateUrl: './actualizar-student.component.html',
  styleUrls: ['./actualizar-student.component.css']
})
export class ActualizarStudentComponent implements OnInit {
  id:number;
  student:Students = new Students();
  constructor(private studentService:StudentsSService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.studentService.obtenerStudentPorId(this.id).subscribe(data =>{
      this.student = data;
    },error => console.log(error));
  }

  irAlaListaDeStudents(){
    this.router.navigate(['/students']);
    swal('Estudiante actualizado',`El estudiante ${this.student.firstName} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.studentService.actualizarStudent(this.id,this.student).subscribe(data => {
      this.irAlaListaDeStudents();
    },error => console.log(error));
  }
}
