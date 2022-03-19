import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/**Components */
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PlatilloDescripcionComponent } from './pages/platillo-descripcion/platillo-descripcion.component';
import { IngredientesPopularesComponent } from './pages/ingredientes-populares/ingredientes-populares.component';
import { ListaPlatillosComponent } from './pages/lista-platillos/lista-platillos.component';
import { PlatillosGeneralComponent } from './pages/platillos-general/platillos-general.component';

/** Angular Material */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';


/**Prime NG */
import {AccordionModule} from 'primeng/accordion'; 
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
//import {ToastModule} from 'primeng/toast';

const routes: Routes = [
  { path: '', redirectTo: 'pages/home', pathMatch: 'full' },
  { path: 'pages/home', component: HomeComponent },
  { path: 'pages/login', component: LoginComponent },
  { path: 'pages/ingredientes-populares', component: IngredientesPopularesComponent },
  { path: 'pages/platillos-general', component: PlatillosGeneralComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    PlatilloDescripcionComponent,
    IngredientesPopularesComponent,
    ListaPlatillosComponent,
    PlatillosGeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatTooltipModule,
    AccordionModule,
    CarouselModule,
    ButtonModule,
    MatSelectModule,
    //ToastModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: BienvenidaService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
