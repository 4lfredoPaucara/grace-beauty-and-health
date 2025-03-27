import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Asegúrate de importar el componente aquí

@NgModule({
  declarations: [
    AppComponent,  // Componente principal
    HomeComponent  // Añade aquí el componente Home
  ],
  imports: [
    BrowserModule // Importación base para aplicaciones Angular
  ],
  providers: [],
  bootstrap: [AppComponent] // Componente raíz
})
export class AppModule { }

