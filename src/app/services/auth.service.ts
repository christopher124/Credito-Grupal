import { Injectable, NgZone } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:1337/auth/local';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    //metodo POST para el servicio
    return this.http.post<any>(this.url, {
      identifier: username,
      password: password,
    });
  }
  eslogueado() {
    //metodo para indicar si existe la variable token en localStorage, solo retornara el contenido de la informacio
    return !!localStorage.getItem('token');
  }
  cerrarSesion() {
    //eliminacion de variable localStorage esto elimina cualquier variable que este en la parte de aplicacion
    localStorage.clear();
    //redirigirlo a una ruta que sea conveninte
    this.router.navigate(['/iniciosesion']);
  }
}
