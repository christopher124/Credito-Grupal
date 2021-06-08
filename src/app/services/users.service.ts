import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Post {
  id?: string | any;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = 'http://localhost:1337/posts';
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<any>(`${this.url}`);
  }

  createPost(post: object) {
    return this.http.post<any>(this.url, post);
  }

  ModificarPost(post: Post, id: string) {
    return this.http.put<any>(`${this.url}/${post}`, id);
  }

  deletePost(id: string) {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  getPostById(id: string) {
    return this.http.get<Post>(`${this.url}/${id}`);
  }
}
