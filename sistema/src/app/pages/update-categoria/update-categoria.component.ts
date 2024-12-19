import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
})
export class UpdateCategoryComponent implements OnInit {
  categoriaId: string | null = null; // ID de la categoría obtenido de la URL
  categoriaForm: FormGroup; // Formulario reactivo para la categoría

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private router: Router
  ) {
    // Inicializa el formulario con validaciones
    this.categoriaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    // Obtén el ID de la categoría desde los parámetros de la ruta
    this.categoriaId = this.route.snapshot.paramMap.get('id');
    if (this.categoriaId) {
      this.cargarDatosCategoria();
    }
  }

  cargarDatosCategoria(): void {
    if (this.categoriaId) {
      this.categoriaService.getCategorias().subscribe({
        next: (response:any) => {
          const categoria = response.data;
          // Rellena el formulario con los datos de la categoría
          this.categoriaForm.patchValue({
            nombre: categoria.nombre || '',
            descripcion: categoria.descripcion || '',
          });
        },
        error: (err) => console.error('Error al cargar los datos de la categoría:', err),
      });
    }
  }

  guardarCambios(): void {
    if (this.categoriaForm.invalid) {
      console.warn('Formulario inválido. Revisa los datos ingresados.');
      return;
    }

    if (!this.categoriaId) {
      console.error('No se puede actualizar la categoría porque el ID no está disponible.');
      return;
    }

    const datosActualizados = this.categoriaForm.value;

    // Llama al servicio para actualizar la categoría
    this.categoriaService.actualizarCategoria(this.categoriaId, datosActualizados).subscribe({
      next: () => {
        console.log('Categoría actualizada correctamente');
        this.router.navigate(['/categorias']); // Redirige a la lista de categorías
      },
      error: (err) => console.error('Error al actualizar la categoría:', err),
    });
  }
}
