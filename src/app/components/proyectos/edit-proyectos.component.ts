import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/service/image.service';
import { Proyectos } from 'src/app/model/proyectos';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {
  img: string = '';
  proyecto: Proyectos = null;

  constructor(private activatedRouter: ActivatedRoute,
    private proyectosService: ProyectosService,
    private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void {

    this.img = this.imageService.url;
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosService.detail(id).subscribe(
      data => {
        this.proyecto = data;
      },
      error => {
        console.error(error);
        alert("Error al cargar el proyecto");
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    if (this.imageService.url) {
      this.proyecto.img = this.imageService.url;
    }
    this.proyectosService.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      },
      error => {
        console.error(error);
        alert("Error al actualizar el proyecto");
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event: any): void {
    const id = this.activatedRouter.snapshot.params['id'];
    alert('esta es la id' + id)
    let name;

    if (id) {
      name = "Proyecto_" + id;
    } else {
      name = "Proyecto_" + this.imageService.generateUUID();
    }

    this.imageService.uploadImage($event, name)
    /*const name = "proyecto_" + id;
    this.imageService.uploadImage($event, name);*/
  }

}

