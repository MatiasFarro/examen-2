import { Component } from '@angular/core';
import { NgClass, NgFor, NgForOf } from '@angular/common';  // Si es necesario agregar alguna directiva
import { RouterLink } from '@angular/router';  // Si necesitas usar navegación en el componente

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],  // Importaciones necesarias para el componente
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
