import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meal } from 'src/app/model/platillo';
import { User } from 'src/app/model/user';
import { BienvenidaService } from 'src/app/services/bienvenida.service';
import { PlatilloDescripcionComponent } from '../platillo-descripcion/platillo-descripcion.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  platilloDelDia: Meal | undefined;
  authenticated: boolean = false;
  idImagen = "../../../assets/img/spider-man.jpg";
  name: any;
  lastname: any;
  email: any;

  constructor(private bienvenidaService: BienvenidaService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.obtenerPlatilloDelDia();
    this.authenticated = localStorage.getItem('authenticated') == "true"? true: false;
    console.log("authenticated: ", this.authenticated);
    this.name = localStorage.getItem('user');
    this.lastname = localStorage.getItem('lastname');
    this.email = localStorage.getItem('email');
  }

  obtenerPlatilloDelDia(){
    this.bienvenidaService.obtenerPlatiloDelDia().subscribe(r => {
      this.platilloDelDia = r.meals[0];
      //console.log(this.platilloDelDia);
    } )
  }

  openDialog() {
    //console.log("Respuesta de Home: ", this.platilloDelDia)
    const dialogRef = this.dialog.open(PlatilloDescripcionComponent, {
      data: {meal: this.platilloDelDia},
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);
    });
  }

  cambiarImagen() {
    console.log("Cambiando imagen de perfil")
  }

  openDialogactualizarPerfil() {
  }
  

}
