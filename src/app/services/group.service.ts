import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

export interface Group {
  id?: string | any;
  groupname: string;
  groupleader: string;
}

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(private http: HttpClient) {}

  getCount() {
    return this.http.get<any>(`${environment.url}/groups/count`);
  }
  getGropsById(id: string) {
    return this.http.get<Group>(`${environment.url}/groups/${id}`);
  }

  getGrops() {
    return this.http.get<any>(`${environment.url}/groups`);
  }

  createGrops(cliente: object) {
    return this.http.post<any>(`${environment.url}/groups`, cliente);
  }

  updateGrops(id: string, grupos: Group) {
    return this.http.put<Group>(`${environment.url}/groups/${id}`, grupos);
  }

  deleteGrops(id: string) {
    return this.http.delete<any>(`${environment.url}/groups/${id}`);
  }
}
