import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable({
    providedIn: 'root'
})
export class CategoriaService {
    private apiUrl = 'http://localhost:4000/api/categoria';

    constructor(private http: HttpClient) { }

    getCategorias(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(this.apiUrl);
    }

    addCategoria(categoria: Categoria): Observable<any> {
        return this.http.post<Categoria>(this.apiUrl, categoria);
    }

    updateCategoria(id: string, categoria: Categoria): Observable<Categoria> {
        return this.http.post<Categoria>(this.apiUrl, categoria);
    }
}