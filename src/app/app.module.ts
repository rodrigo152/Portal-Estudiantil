import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ProfesorListComponent } from './profesor-list/profesor-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarStudentComponent } from './registrar-student/registrar-student.component';
import { RegistrarProfesorComponent } from './registrar-profesor/registrar-profesor.component';
import { RegistrarCourseComponent } from './registrar-course/registrar-course.component';
import { FormStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActualizarStudentComponent } from './actualizar-student/actualizar-student.component';
import { ActualizarProfesorComponent } from './actualizar-profesor/actualizar-profesor.component';
import { ActualizarCourseComponent } from './actualizar-course/actualizar-course.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { ApartadoSocialComponent } from './apartado-social/apartado-social.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    ProfesorListComponent,
    CourseListComponent,
    RegistrarStudentComponent,
    RegistrarProfesorComponent,
    RegistrarCourseComponent,
    ActualizarStudentComponent,
    ActualizarProfesorComponent,
    ActualizarCourseComponent,
    LoginComponent,
    HomeComponent,
    ContenidoComponent,
    ApartadoSocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
