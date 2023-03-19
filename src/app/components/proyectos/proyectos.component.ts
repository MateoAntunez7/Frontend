import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyectos[] = [];

  constructor(
    private sProyectos: ProyectosService, 
    private tokenService: TokenService, 
    private sanitizer: DomSanitizer
  ) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyectos(): void {
    this.sProyectos.lista().subscribe(data => { 
      this.proyectos = data;
      this.proyectos.forEach((proyecto) => {
        proyecto.img = this.sanitizer.bypassSecurityTrustUrl(proyecto.img as string);
      });
    });
  }
  

  eliminar(id?: number){
    if(id != undefined){
      this.sProyectos.delete(id).subscribe(
        data => {
          this.cargarProyectos();
        }, err => {
          alert("No se pudo borrar el proyecto");
        }
      );
    }
  }
}
