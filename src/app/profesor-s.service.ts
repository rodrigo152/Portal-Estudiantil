import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from './profesor';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfesorSService {
  private baseURL = "http://localhost:8092/lista/profesor";
  constructor(private httpClient : HttpClient) { }
  obtenerlistdeprofesor():Observable<Profesor[]>{
    return this.httpClient.get<Profesor[]>(`${this.baseURL}`);

  }
  registrarProfesor(Profesor:Profesor) :Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,Profesor);

  }
  actualizarProfesor(id:number,Profesor:Profesor) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,Profesor);
  }
  obtenerProfesorPorId(id:number):Observable<Profesor>{
    return this.httpClient.get<Profesor>(`${this.baseURL}/${id}` );
  }
  eliminarProfesor(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
