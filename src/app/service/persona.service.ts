import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroments';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = environment.URL + 'personas/'


  constructor(private httpClient: HttpClient) { }
  makeRequest() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' // o el dominio del servidor que aloja el recurso
    });
  
    this.httpClient.get('https://backendaem.onrender.com/personas', { headers }).subscribe((response) => {
      // procesar la respuesta aquí
    });
  }
  

  public lista(): Observable<persona[]> {
    return this.httpClient.get<persona[]>(this.URL + 'lista');
  }

  public detail(id:number): Observable<persona>{
    return this,this.httpClient.get<persona>(this.URL + `detail/${id}`);
  }

  public update(id:number,Persona:persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, Persona)
  }

  public getPersona(): Observable<persona>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://frontendaem.web.app',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
      })
    };
  
    return this.httpClient.get<persona>(this.URL+ 'traer', httpOptions);
  }
  
}
