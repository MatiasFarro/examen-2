import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientes } from '../models/clientes';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private readonly apiUrl = 'http://localhost:4000/api/clientes'; 

  constructor(private http: HttpClient) {}

  // cositos para los clientes
  getClientes(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.apiUrl);
  }


  getCliente(id: string): Observable<Clientes> {
    return this.http.get<Clientes>(`${this.apiUrl}/${id}`);
  }

  addCliente(cliente: Clientes): Observable<Clientes> {
    return this.http.post<Clientes>(this.apiUrl, cliente);
  }

 
  updateCliente(id: string, cliente: Clientes): Observable<Clientes> {
    return this.http.put<Clientes>(`${this.apiUrl}/${id}`, cliente);
  }

  
  deleteCliente(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
