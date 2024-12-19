import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mesero } from '../models/mesero';
import { Login } from '../models/login';

@Injectable({
    providedIn: 'root',
})
export class MeseroService {
    private apiUrl = 'http://localhost:4000/api/meseros'; // URL base para los meseros

    constructor(private http: HttpClient) {}

    // Método para login
    login(mesero: Login): Observable<any> {
        return this.http.post<any>(this.apiUrl, mesero);
    }

    // Obtener todos los meseros
    getMesero(): Observable<Mesero[]> {
        return this.http.get<Mesero[]>(this.apiUrl);
    }

    // Agregar un mesero
    addMesero(mesero: Mesero): Observable<any> {
        return this.http.post<Mesero>(this.apiUrl, mesero);
    }

    // Actualizar un mesero
    updateMesero(id: string, mesero: Mesero): Observable<Mesero> {
        return this.http.put<Mesero>(`${this.apiUrl}/${id}`, mesero);
    }

    // Eliminar un mesero
    deleteMesero(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
