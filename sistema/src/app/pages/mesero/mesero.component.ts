import { Component, OnInit } from '@angular/core';
import { Mesero } from '../../models/mesero';
import { MeseroService } from '../../services/mesero.service';
import { NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listar-meseros',
  standalone: true,
  imports: [NgFor, NgClass, RouterLink],
  templateUrl: './listar-meseros.component.html',
  styleUrls: ['./listar-meseros.component.css']
})
export class MeseroComponent implements OnInit {
  meseros: Mesero[] = [];

  constructor(private meseroService: MeseroService) { }

  ngOnInit(): void {
    this.obtenerMeseros();
  }

  obtenerMeseros(): void {
    this.meseroService.getMesero().subscribe({
      next: (respuesta: any) => {
        console.log('Meseros cargados:', respuesta.data);
        this.meseros = respuesta.data;
      },
      error: (error) => {
        console.error('Error al obtener los meseros', error);
      }
    });
  }

  eliminarMesero(id: string | undefined): void {
    if (id) {
      const confirmacion = confirm('¿Deseas eliminar este mesero?');
      if (confirmacion) {
        this.meseroService.deleteMesero(id).subscribe({
          next: (respuesta: any) => {
            this.meseros = this.meseros.filter(m => m._id !== id);
            console.log('Mesero eliminado', respuesta);
          },
          error: (error) => {
            console.error('Error al eliminar el mesero', error);
          }
        });
      }
    } else {
      console.error('ID no válido');
    }
  }
}

