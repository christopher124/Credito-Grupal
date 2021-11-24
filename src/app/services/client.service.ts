import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

export interface Clients {
  id?: string | any;
  firstname: string;
  lastname: string;
  address: string;
  number_int_address: string;
  suburb: string;
  city: string;
  state: string;
  zip: string;
  tel: string;
}

export interface cod {
  cp: string;
  estado: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private endpoint_sepomex = 'https://api.copomex.com/query';
  private method_sepomex = 'info_cp';
  private cp = '';
  private variable_string = '?type=simplified';
  private token = '&token=pruebas';
  constructor(private http: HttpClient) {}

  getCp(cp: string) {
    return this.http.get<any>(
      `${this.endpoint_sepomex}/${this.method_sepomex}/${cp}/${this.variable_string}${this.token}`
    );
  }
  getCount() {
    return this.http.get<any>(`${environment.url}/clients/count`);
  }
  getClients() {
    return this.http.get<any>(`${environment.url}/clients`);
  }

  getPostById(id: string) {
    return this.http.get<any>(`${environment.url}/clients/${id}`);
  }

  createClients(cliente: object) {
    return this.http.post<any>(`${environment.url}/clients`, cliente);
  }

  updateClients(id: string, cliente: Clients) {
    return this.http.put<Clients>(`${environment.url}/clients/${id}`, cliente);
  }

  deleteClients(id: string) {
    return this.http.delete<any>(`${environment.url}/clients/${id}`);
  }
}
