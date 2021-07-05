import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    //metodo POST para el servicio
    return this.http.post<any>(`${environment.url}/auth/local`, {
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
    this.router.navigate(['']);
  }
}
