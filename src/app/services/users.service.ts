import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface Users {
  id?: string | any;
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  getCount() {
    return this.http.get<any>(`${environment.url}/users/count`);
  }
  getUsers() {
    return this.http.get<any>(`${environment.url}/users`);
  }

  createUsers(post: object) {
    return this.http.post<any>(`${environment.url}/users`, post);
  }

  updateClients(id: string, usuario: Users) {
    return this.http.put<any>(`${environment.url}/users/${id}`, usuario);
  }
  deleteUsers(id: string) {
    return this.http.delete<any>(`${environment.url}/users/${id}`);
  }

  getUsersById(id: string) {
    return this.http.get<Users>(`${environment.url}/users/${id}`);
  }
}
