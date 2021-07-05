import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  private url = 'http://localhost:1337/users';
  private count = 'http://localhost:1337/users/count';

  constructor(private http: HttpClient) {}
  getCount() {
    return this.http.get<any>(this.count);
  }
  getUsers() {
    return this.http.get<any>(`${this.url}`);
  }

  createUsers(post: object) {
    return this.http.post<any>(this.url, post);
  }

  updateClients(_id: string, usuario: Users) {
    return this.http.put<any>(`${this.url}/${usuario}`, _id);
  }
  deleteUsers(id: string) {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  getUsersById(id: string) {
    return this.http.get<Users>(`${this.url}/${id}`);
  }
}
