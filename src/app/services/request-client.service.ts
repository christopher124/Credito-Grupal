import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

export interface RequestClient {
  _id?: string | any;
  amount: string;
  client: string;
  requests_group: string;
}

@Injectable({
  providedIn: 'root',
})
export class RequestClientService {
  constructor(private http: HttpClient) {}
  private url = 'http://localhost:1337/requests-users';

  getRequest() {
    return this.http.get<any>(`${this.url}`);
  }

  createRequest(post: object) {
    return this.http.post<any>(this.url, post);
  }

  updateRequest(_id: string, request: RequestClient) {
    return this.http.put<any>(`${this.url}/${request}`, _id);
  }
  deleteRequest(id: string) {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  getRequestById(id: string) {
    return this.http.get<Request>(`${this.url}/${id}`);
  }
}
