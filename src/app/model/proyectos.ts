import { SafeUrl } from '@angular/platform-browser';

export class Proyectos {
    id?: number;
    nombre: string;
    link: string;
    descripcion: string;
    img: SafeUrl;

    constructor(nombre: string,link: string, descripcion:string, img:SafeUrl){
        this.nombre = nombre;
        this.link = link;
        this.descripcion = descripcion;
        this.img = img;
    }
}
