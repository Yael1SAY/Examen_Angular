import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ingrediente } from 'src/app/model/ingrediente';
import { Meal } from 'src/app/model/platillo';
import { BienvenidaService } from 'src/app/services/bienvenida.service';
import { PlatilloDescripcionComponent } from '../platillo-descripcion/platillo-descripcion.component';

@Component({
  selector: 'app-lista-platillos',
  templateUrl: './lista-platillos.component.html',
  styleUrls: ['./lista-platillos.component.css']
})
export class ListaPlatillosComponent implements OnInit {

  ingrediente: Ingrediente | undefined;
  platillos: Meal[] = [];
  responsiveOptions;

  constructor(public bienvenidaServices: BienvenidaService, public dialogRef: MatDialogRef<ListaPlatillosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.ingrediente = this.data.ingrediente;
    //console.log("Ingrediente Lista platillos: ", this.ingrediente);
    this.obtenerPlatillosPorIngrediente();
  }

  obtenerPlatillosPorIngrediente() {
    this.bienvenidaServices.obtenerPaltillosPorIngrediete(this.ingrediente?.strIngredient!).subscribe(r => {
      this.platillos = r.meals;
      //console.log("platillos: ", this.platillos);
    })
  }

  openDialog(platillo: any) {
    //console.log("Paltillo: ", platillo);
    const dialogRef = this.dialog.open(PlatilloDescripcionComponent, {
      data: {meal: platillo},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
