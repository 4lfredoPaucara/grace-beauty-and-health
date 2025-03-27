import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [ HomeComponent, NavbarComponent, ServiciosComponent, FooterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'grace-beauty-and-health';
}
