import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

export interface Group {
  _id?: string | any;
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
  getGropsById(_id: string) {
    return this.http.get<Group>(`${environment.url}/groups/${_id}`);
  }

  getGrops() {
    return this.http.get<any>(`${environment.url}/groups`);
  }

  createGrops(cliente: object) {
    return this.http.post<any>(`${environment.url}/groups`, cliente);
  }

  updateGrops(_id: string, grupos: Group) {
    return this.http.put<any>(`${environment.url}/groups/${grupos}`, _id);
  }

  deleteGrops(_id: string) {
    return this.http.delete<any>(`${environment.url}/groups/${_id}`);
  }
}
