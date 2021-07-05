import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Group {
  _id?: string | any;
  groupname: string;
  groupleader: string;
}

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private url = 'http://localhost:1337/groups';
  private count = 'http://localhost:1337/groups/count';

  constructor(private http: HttpClient) {}

  getCount() {
    return this.http.get<any>(this.count);
  }
  getGropsById(_id: string) {
    return this.http.get<Group>(`${this.url}/${_id}`);
  }

  getGrops() {
    return this.http.get<any>(`${this.url}`);
  }

  createGrops(cliente: object) {
    return this.http.post<any>(this.url, cliente);
  }

  updateGrops(_id: string, grupos: Group) {
    return this.http.put<any>(`${this.url}/${grupos}`, _id);
  }

  deleteGrops(_id: string) {
    return this.http.delete<any>(`${this.url}/${_id}`);
  }
}
