import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Meal } from 'src/app/model/platillo';
import { BienvenidaService } from 'src/app/services/bienvenida.service';
//import {DomSanitizationService} from '@angular/platform-browser';

@Component({
  selector: 'app-platillo-descripcion',
  templateUrl: './platillo-descripcion.component.html',
  styleUrls: ['./platillo-descripcion.component.css']
})
export class PlatilloDescripcionComponent implements OnInit {

  meal: Meal | undefined;
  youtubeEmbed: string | undefined;

  constructor(public dialogRef: MatDialogRef<PlatilloDescripcionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public bienvenidaServices: BienvenidaService) { }

  ngOnInit(): void {
    //this.meal = this.data.meal;
    //console.log("Datos del modal: ", this.data);
    this.obtenerPlatilloPorId(this.data.meal.idMeal);
    //console.log("Nombre del platillo: ", this.meal?.strMeal);
    this.youtubeEmbed = this.remplazarCadena(this.meal?.strYoutube!)
    
    // J-Script

  }

  remplazarCadena(cadena: string){
    const str = cadena;
    const nuevaStr = str?.replace("watch?v=", "embed/");
    //console.log("nuevaStr", nuevaStr);
    return nuevaStr;
  }

  obtenerPlatilloPorId(idPaltillo: string){
    this.bienvenidaServices.obtenerPlatiloPorId(idPaltillo).subscribe(r => {
      this.meal = r.meals[0];
      //console.log("respuesta de lista Platillo: ", this.meal)
    })
  }

  // photoURL() {
  //   return this.sanitizer.bypassSecurityTrustUrl(this.mediaItems[1].url);
  // }

}
