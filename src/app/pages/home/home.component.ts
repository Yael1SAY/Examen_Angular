import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meal } from 'src/app/model/platillo';
import { BienvenidaService } from 'src/app/services/bienvenida.service';
import { PlatilloDescripcionComponent } from '../platillo-descripcion/platillo-descripcion.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  platilloDelDia: Meal | undefined;
  constructor(private bienvenidaService: BienvenidaService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.obtenerPlatilloDelDia();
  }

  obtenerPlatilloDelDia(){
    this.bienvenidaService.obtenerPlatiloDelDia().subscribe(r => {
      this.platilloDelDia = r.meals[0];
      console.log(this.platilloDelDia);
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
  

}
