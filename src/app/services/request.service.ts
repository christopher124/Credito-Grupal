import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Request {
  _id?: string | any;
  status: string;
  amount_requested: string;
  requests_user: string;
  group: string;
}

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}
  private url = 'http://localhost:1337/requests-groups';

  getRequest() {
    return this.http.get<any>(`${this.url}`);
  }

  createRequest(post: object) {
    return this.http.post<any>(this.url, post);
  }

  updateRequest(_id: string, request: Request) {
    return this.http.put<any>(`${this.url}/${request}`, _id);
  }
  deleteRequest(id: string) {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  getRequestById(id: string) {
    return this.http.get<Request>(`${this.url}/${id}`);
  }
}
