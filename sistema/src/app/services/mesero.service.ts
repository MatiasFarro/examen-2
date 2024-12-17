import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mesero } from '../models/mesero';
import { ObjectEncodingOptions } from 'fs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
    providedIn: 'root'
})
export class MeseroService { 
    private apiUrl = 'http://localhost:4000/api/mesero';

    constructor(private http: HttpClient) { }

    login(mesero: Login): Observable<any> {
        return this.http.post<any>(this.auth, mesero);
    }

    getMesero(): Observable<Mesero[]> {
        return this.http.get<Mesero[]>(this.apiUrlGet);
    }

    addMesero(mesero: Mesero): Observable<any> {
        return this.http.post<Mesero>(this.apiUrl, mesero);
    }

    updateMesero(id: string, mesero: Mesero): Observable<Mesero> {
        return this.http.put<Mesero>(`${this.apiUrl}/${id}`, mesero);
    }

    deleteMesero(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}