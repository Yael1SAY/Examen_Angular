import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class BienvenidaService {

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * Metodo que llama un servicio para obtener un platillo aleatoriamente
   * @returns 
   */
  obtenerPlatiloDelDia(): Observable<any>{
    return this.http.get<any>(`${URL}random.php`)
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
   * Metodo que llama un servicio para obtener platillos filtrado por ingrediente
   * @param ingrediete 
   * @returns 
   */
  obtenerPaltillosPorIngrediete(ingrediete: string): Observable<any>{
    return this.http.get<any>(`${URL}filter.php?i=${ingrediete}`)
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
   * Metodo que llama un servicio para obtener un platillo por Id
   * @param platilloId 
   * @returns 
   */
  obtenerPlatiloPorId(platilloId: string): Observable<any>{
    return this.http.get<any>(`${URL}lookup.php?i=${platilloId}`)
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
   * Metodo que llama un servicio para obtener un platillo filtrado por area
   * @param area 
   * @returns 
   */
  obtenerPlatiloPorArea(area: string): Observable<any>{
    return this.http.get<any>(`${URL}filter.php?a=${area}`)
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
   * Metodo que llama un servicio para obtener platillos filtrados por categoria
   * @param categoria 
   * @returns 
   */
  obtenerPlatiloPorCategoria(categoria: string): Observable<any>{
    return this.http.get<any>(`${URL}filter.php?c=${categoria}`)
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
   * Metodo que obtiene 10 platillos de manera aleatoria
   * @returns 
   */
  obtenerPlatillosRandom(): Observable<any>{
    return this.http.get<any>(`${URL}randomselection.php`)
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
