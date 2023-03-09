import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroments';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  expURL = environment.URL + 'explab/'

  constructor(private httpClient: HttpClient) { }

  makeRequest() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' // o el dominio del servidor que aloja el recurso
    });
  
    this.httpClient.get('https://backendaem.onrender.com/explab', { headers }).subscribe((response) => {
      // procesar la respuesta aquí
    });
  }
  

  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.expURL + 'lista');
  }
  
  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`);
  } 

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', experiencia);
  }

  public update(id:number,experiencia:Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia)
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
  
}
