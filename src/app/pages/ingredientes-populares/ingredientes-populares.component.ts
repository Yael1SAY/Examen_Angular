import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ingrediente } from 'src/app/model/ingrediente';
import { IngredientesService } from 'src/app/services/ingredientes.service';
import { ListaPlatillosComponent } from '../lista-platillos/lista-platillos.component';

@Component({
  selector: 'app-ingredientes-populares',
  templateUrl: './ingredientes-populares.component.html',
  styleUrls: ['./ingredientes-populares.component.css']
})
export class IngredientesPopularesComponent implements OnInit {

  ingredientes: Ingrediente[] = [];
  displayedColumns: string[] = ['Ingredient', 'Description', 'Type'];

  constructor(private ingredientesService: IngredientesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.obtenerIngredientes();
  }

  /**
   * Metodo que obtine la lista de ingredientes
   */
  obtenerIngredientes() {
    this.ingredientesService.obtenerListaIngredientes().subscribe(r => {
      this.ingredientes = r.meals;
      //console.log("lista de ingredientes: ", this.ingredientes);
    })
  }

  /**
   * Metodo que abre un modal para enlistar los platillos por ingrediente
   * @param ingrediente 
   */
  openDialog(ingrediente: Ingrediente): void {
    //console.log("Ingrediente: ", ingrediente)
    const dialogRef = this.dialog.open(ListaPlatillosComponent, {
      data: { ingrediente: ingrediente },
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
    });
  }

}
