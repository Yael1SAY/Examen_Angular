import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * Metodo que llama un servicio para obtener la lista de platillos filtrado por ingrediente
   * @returns 
   */
  obtenerPlatillosPorIngrediente(): Observable<any>{
    return this.http.get<any>(`${URL}filter.php?i=chicken_breast`)
    .pipe(
      catchError(e =>{
        if(e.status==0){
          this.router.navigate(['/login']);
          return throwError(() => e);
        }
        if(e.status==401){
          this.router.navigate(['/login'])
          return throwError(() => e);
        }
        return throwError(() => e);
      })
    );
  }

  /**
   * Metodo que llama un servicio para obtener la lista de ingredientes
   * @returns 
   */
  obtenerListaIngredientes(): Observable<any>{
    return this.http.get<any>(`${URL}list.php?i=list`)
    .pipe(
      catchError(e =>{
        if(e.status==0){
          this.router.navigate(['/login']);
          return throwError(() => e);
        }
        if(e.status==401){
          this.router.navigate(['/login'])
          return throwError(() => e);
        }
        return throwError(() => e);
      })
    );
  }
}
