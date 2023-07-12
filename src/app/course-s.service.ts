import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course';
@Injectable({
  providedIn: 'root'
})
export class CourseSService {

  private baseURL = "http://localhost:8093/lista/cursodetalle";
  constructor(private httpClient : HttpClient) { }
  obtenerlistdecourse():Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${this.baseURL}`);

  }
  registrarStudent(student:Course) :Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,student);

  }
  actualizarStudent(id:number,student:Course) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,student);
  }
  obtenerCoursePorId(id:number):Observable<Course>{
    return this.httpClient.get<Course>(`${this.baseURL}/${id}` );
  }
  eliminarStudent(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
