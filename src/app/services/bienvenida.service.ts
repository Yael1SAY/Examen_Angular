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

}
