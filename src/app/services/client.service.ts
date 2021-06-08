import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Clients {
  id?: string | any;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private url = 'http://localhost:1337/clients';
  private state = 'https://api.copomex.com/query/get_estados?token=pruebas';

  constructor(private http: HttpClient) {}

  getstate() {
    return this.http.get<any>(`${this.state}`);
  }

  getClients() {
    return this.http.get<any>(`${this.url}`);
  }

  createClients(cliente: object) {
    return this.http.post<any>(this.url, cliente);
  }

  ModificarClients(client: Clients, id: string) {
    return this.http.put<any>(`${this.url}/${client}`, id);
  }
  deleteClients(id: string) {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
