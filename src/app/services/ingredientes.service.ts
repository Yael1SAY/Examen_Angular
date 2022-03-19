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

  obtenerPlatillosPorIngrediente(): Observable<any>{
    return this.http.get<any>(`${URL}filter.php?i=chicken_breast`)
    .pipe(
      catchError(e =>{
        if(e.status==0){
          this.router.navigate(['/login']);
          //swal.fire("Servicio fuera de linea", 'No es posible conectar al servicio, contacte al administrador','error');
          return throwError(() => e);
        }
        if(e.status==401){//realiza la validacion cuando no se a autenticado
          this.router.navigate(['/login'])
          return throwError(() => e);
        }
        //return map(response => response as Comprador[])
        return throwError(() => e);
      })
    );
  }

  obtenerListaIngredientes(): Observable<any>{
    return this.http.get<any>(`${URL}list.php?i=list`)
    .pipe(
      catchError(e =>{
        if(e.status==0){
          this.router.navigate(['/login']);
          //swal.fire("Servicio fuera de linea", 'No es posible conectar al servicio, contacte al administrador','error');
          return throwError(() => e);
        }
        if(e.status==401){//realiza la validacion cuando no se a autenticado
          this.router.navigate(['/login'])
          return throwError(() => e);
        }
        //return map(response => response as Comprador[])
        return throwError(() => e);
      })
    );
  }
}
