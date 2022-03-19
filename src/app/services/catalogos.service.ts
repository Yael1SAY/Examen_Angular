import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * Metodo que llama un servicio para obtener el catalogo de categorias
   * @returns 
   */
  obtenerCatalogoCategorias(): Observable<any>{
    return this.http.get<any>(`${URL}list.php?c=list`)
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
   * Metodo que llama un servicio para obtener el catalogo de areas
   * @returns 
   */
  obtenerCatalogoAreas(): Observable<any>{
    return this.http.get<any>(`${URL}list.php?a=list`)
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
