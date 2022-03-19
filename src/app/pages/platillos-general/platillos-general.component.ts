import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meal } from 'src/app/model/platillo';
import { BienvenidaService } from 'src/app/services/bienvenida.service';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { PlatilloDescripcionComponent } from '../platillo-descripcion/platillo-descripcion.component';

@Component({
  selector: 'app-platillos-general',
  templateUrl: './platillos-general.component.html',
  styleUrls: ['./platillos-general.component.css']
})
export class PlatillosGeneralComponent implements OnInit {

  categorias: any[] = [];
  areas: any[] = [];
  categoria: string = "";
  area: string = "";
  platillos: Meal[] = [];
  responsiveOptions;

  constructor(private catalogoServices: CatalogosService, private bienvenidaSetvice: BienvenidaService,
    public dialog: MatDialog) { 
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
    this.obtenerCategorias();
    this.obtenerAreas();
    this.obtenerPaltillosRndom();
  }

  /**
   * Metodo que obtiene el catalogo de categorias
   */
  obtenerCategorias() {
    this.catalogoServices.obtenerCatalogoCategorias().subscribe(r => {
      this.categorias = r.meals;
      //console.log("Categorias: ", this.categorias);
    })
  }

  /**
   * Metodo que obtiene el catalogo de areas
   */
  obtenerAreas() {
    this.catalogoServices.obtenerCatalogoAreas().subscribe(r => {
      this.areas = r.meals;
      //console.log("Areas: ", this.areas);
    })
  }

  /**
   * Metodo que obtiene los platillos filtrados por area
   * @param event 
   */
  obtenerPlatillosPorArea(event: any) {
    console.log("event Area: ", event);
    this.categoria = "";
    this.platillos = [];
    this.bienvenidaSetvice.obtenerPlatiloPorArea(event).subscribe(r => {
      //console.log("Platillos por area" , r.meals);
      this.platillos = r.meals;
    })
  }

  /**
   * Metodo que obtiene platillos filtrado por categoria
   * @param event 
   */
  obtenerPlatillosPorCategoria(event: any) {
    this.platillos = [];
    this.area = "";
    this.bienvenidaSetvice.obtenerPlatiloPorCategoria(this.categoria).subscribe(r => {
      //console.log("Platillos por Categoria" , r.meals);
      this.platillos = r.meals;
    })
  }

  /**
   * Metodo que ontiene 10 platillos al azar
   */
  obtenerPaltillosRndom() {
    this.bienvenidaSetvice.obtenerPlatillosRandom().subscribe(r => {
      //console.log("Platillos Random: ", r);
    })
  }

  /**
   * Metodo que abre un modal para visualizar la descripcion del platillo
   * @param platillo 
   */
  openDialog(platillo: any) {
    //console.log("Paltillo: ", platillo);
    const dialogRef = this.dialog.open(PlatilloDescripcionComponent, {
      data: {meal: platillo},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
