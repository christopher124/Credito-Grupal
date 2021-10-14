import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

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

  getRequest() {
    return this.http.get<any>(`${environment.url}/requests-users`);
  }

  createRequest(post: object) {
    return this.http.post<any>(`${environment.url}/requests-users`, post);
  }

  updateRequest(_id: string, request: RequestClient) {
    return this.http.put<any>(`${environment.url}/${request}`, _id);
  }
  deleteRequest(id: string) {
    return this.http.delete<any>(`${environment.url}/requests-users/${id}`);
  }

  getRequestById(id: string) {
    return this.http.get<Request>(`${environment.url}/requests-users/${id}`);
  }
}
