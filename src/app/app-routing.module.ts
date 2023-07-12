import { NgModule } from '@angular/core';
import {ContenidoComponent} from './contenido/contenido.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { RegistrarStudentComponent } from './registrar-student/registrar-student.component';
import { ActualizarStudentComponent } from './actualizar-student/actualizar-student.component';
import { ProfesorListComponent } from './profesor-list/profesor-list.component';
import { RegistrarProfesorComponent } from './registrar-profesor/registrar-profesor.component';
import { ActualizarProfesorComponent } from './actualizar-profesor/actualizar-profesor.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ApartadoSocialComponent } from './apartado-social/apartado-social.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  {path:'contenido',component:ContenidoComponent},
  {path:'social',component:ApartadoSocialComponent},
  {path:'noticias',component:NoticiasComponent},
  {path:'detalle/:id',component:CourseListComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'students',component:StudentListComponent},
  {path:'profesor',component:ProfesorListComponent},
  {path:'registrar-profesor', component:RegistrarProfesorComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'registrar-students', component:RegistrarStudentComponent},
  {path:'actualizar-profesor/:id',component:ActualizarProfesorComponent},
  {path:'actualizar-student/:id',component:ActualizarStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
