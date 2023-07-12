import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit{
  home:HomeComponent[];
  constructor( private router:Router) { }
  ngOnInit(): void{
  }
  siguientehoja(){
    this.router.navigate(['/students']);
  }
}
