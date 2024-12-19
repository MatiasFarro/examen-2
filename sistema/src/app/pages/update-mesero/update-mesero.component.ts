import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MeseroService } from '../../services/mesero.service';


@Component({
  selector: 'app-update-mesero',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-mesero.component.html',
  styleUrls: ['./update-mesero.component.css']
})
export class UpdateMeseroComponent implements OnInit {
  meseroForm: FormGroup;
  meseroId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private meseroService: MeseroService
  ) {
    // Inicialización del formulario con validaciones
    this.meseroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]]
    });
  }

  ngOnInit(): void {
    // Obtener ID del mesero desde las rutas
    this.meseroId = this.route.snapshot.paramMap.get('id');
    if (this.meseroId) {
      this.cargarDatosMesero();
    }
  }

  cargarDatosMesero(): void {
    if (this.meseroId) {
      this.meseroService.getMesero().subscribe({
        next: (response:any) => {
          const mesero = response.data;
          this.meseroForm.patchValue({
            nombre: mesero.nombre,
            email: mesero.email,
            telefono: mesero.telefono,
          });
        },
        error: (err) => console.error('Error al cargar el mesero:', err)
      });
    }
  }

  guardarCambios(): void {
    if (this.meseroForm.invalid) {
      console.warn('Formulario inválido');
      return;
    }

    if (this.meseroId) {
      const datosActualizados = this.meseroForm.value;

      this.meseroService.updateMesero(this.meseroId, datosActualizados).subscribe({
        next: () => {
          console.log('Mesero actualizado correctamente');
          this.router.navigate(['/mesero']);
        },
        error: (err) => console.error('Error al actualizar el mesero:', err)
      });
    }
  }
}
