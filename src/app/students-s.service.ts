import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from './students';

@Injectable({
  providedIn: 'root'
})
export class StudentsSService {
  private baseURL = "http://localhost:8090/lista/students";
  constructor(private httpClient : HttpClient) { }
  obtenerlistdestudents():Observable<Students[]>{
    return this.httpClient.get<Students[]>(`${this.baseURL}`);

  }
  registrarStudent(student:Students) :Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,student);

  }
  actualizarStudent(id:number,student:Students) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,student);
  }
  obtenerStudentPorId(id:number):Observable<Students>{
    return this.httpClient.get<Students>(`${this.baseURL}/${id}` );
  }
  eliminarStudent(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
