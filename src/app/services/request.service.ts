import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

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

  getRequest() {
    return this.http.get<any>(`${environment.url}/requests-groups`);
  }

  createRequest(post: object) {
    return this.http.post<any>(`${environment.url}/requests-groups`, post);
  }

  updateRequest(_id: string, request: Request) {
    return this.http.put<any>(
      `${environment.url}/requests-groups/${request}`,
      _id
    );
  }
  deleteRequest(id: string) {
    return this.http.delete<any>(`${environment.url}/requests-groups/${id}`);
  }

  getRequestById(id: string) {
    return this.http.get<Request>(`${environment.url}/requests-groups/${id}`);
  }
}
