import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';

const USUARIO: User = {
  user: "user", password: "root", name: "Yael", lastname: "Salinas Alcántara", email: "yael.system10@gmail.com"
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  /**
   * Metodo que valida el usuario y contraseña
   * @param user 
   * @param password 
   * @returns 
   */
   public login(user: string, password: string): boolean {
    var authenticated: boolean = false
    if(user===USUARIO.user && password===USUARIO.password){
      authenticated = true;
      sessionStorage.setItem('authenticated', JSON.stringify(authenticated));
      console.log("Inicio sesion con exito");
      this.router.navigate(['pages/home']);
    }
    else {
      console.log("Usuario o contraseña incorrecta");
    }
    return authenticated;
  }
}
