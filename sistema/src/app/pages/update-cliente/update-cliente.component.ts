import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { NgIf } from '@angular/common';

@Component({
  imports: [NgIf, ReactiveFormsModule],
  selector: 'app-update-client',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css'],
})
export class UpdateClientComponent implements OnInit {
  clienteId: string | null = null; // ID del cliente obtenido de la URL
  clienteForm: FormGroup; // Formulario reactivo para el cliente

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private router: Router
  ) {
    // Inicializa el formulario con validaciones
    this.clienteForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
    });
  }

  ngOnInit(): void {
    // Obtén el ID del cliente desde los parámetros de la ruta
    this.clienteId = this.route.snapshot.paramMap.get('id');
    if (this.clienteId) {
      this.cargarDatosCliente();
    }
  }

  cargarDatosCliente(): void {
    if (this.clienteId) {
      this.clienteService.getCliente(this.clienteId).subscribe({
        next: (response:any) => {
          const cliente = response.data;
          // Rellena el formulario con los datos del cliente
          this.clienteForm.patchValue({
            nombre: cliente.nombre || '',
            email: cliente.email || '',
            telefono: cliente.telefono || '',
          });
        },
        error: (err) => console.error('Error al cargar los datos del cliente:', err),
      });
    }
  }

  guardarCambios(): void {
    if (this.clienteForm.invalid) {
      console.warn('Formulario inválido. Revisa los datos ingresados.');
      return;
    }

    if (!this.clienteId) {
      console.error('No se puede actualizar el cliente porque el ID no está disponible.');
      return;
    }

    const datosActualizados = this.clienteForm.value;

    // Llama al servicio para actualizar el cliente
    this.clienteService.updateCliente(this.clienteId, datosActualizados).subscribe({
      next: () => {
        console.log('Cliente actualizado correctamente');
        this.router.navigate(['/clientes']); // Redirige a la lista de clientes
      },
      error: (err) => console.error('Error al actualizar el cliente:', err),
    });
  }
}
