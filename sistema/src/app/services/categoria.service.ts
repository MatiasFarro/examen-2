import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable({
    providedIn: 'root',
})
export class CategoriaService {
    private apiUrl = 'http://localhost:4000/api/categoria';

    constructor(private http: HttpClient) {}

    // Obtener todas las categorías
    getCategorias(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(this.apiUrl);
    }

    // para la nueva categoría
    añadirCategoria(categoria: Categoria): Observable<any> {
        return this.http.post<any>(this.apiUrl, categoria);
    }

    // Eliminar una categoría por ID
    eliminarCategoria(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }

    // actualizacion
    actualizarCategoria(id: string, categoria: Categoria): Observable<Categoria> {
        return this.http.put<Categoria>(`${this.apiUrl}/${id}`, categoria);
    }
}