import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';  // Si es necesario agregar alguna directiva
import { RouterLink } from '@angular/router';  // Si necesitas usar navegación en el componente

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgFor, NgClass, RouterLink],  // Importaciones necesarias para el componente
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

}
