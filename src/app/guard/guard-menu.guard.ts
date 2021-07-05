import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class GuardMenuGuard implements CanActivate {
  //se creo el constructor y se le agregaron los parametros haciendo referencia al servicio
  constructor(private auth: AuthService, private router: Router) {}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  canActivate(): boolean {
    if (this.auth.eslogueado()) {
      this.router.navigate(['/dashboard']);
      return true;
    } else {
      //redireccionamiento de ruta
      this.router.navigate(['']);
      return false;
    }
  }
}
