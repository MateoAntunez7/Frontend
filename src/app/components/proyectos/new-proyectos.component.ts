import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/service/image.service';
import { Proyectos } from 'src/app/model/proyectos';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit{
  nombre: string = '';
  descripcion: string = '';
  link: string = "";
  img: string = "";
  constructor(private sProyectos: ProyectosService, private router: Router, private activatedRouter: ActivatedRoute,public imageService: ImageService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const pro = new Proyectos(this.nombre, this.descripcion,this.link,this.img);
    this.sProyectos.save(pro).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_" + id;
    this.imageService.uploadImage($event,name)

  }
}
