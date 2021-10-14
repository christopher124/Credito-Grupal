import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
    '../../../assets/ccs-login/css/style.css',
  ],
})
export class LoginComponent implements OnInit {
  usuario = {
    identifier: '',
    password: '',
  };

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {}
  login(identifier: string, password: string) {
    //metodo subscribe para trabajar la respuesta que viene de express
    this.auth.login(identifier, password).subscribe(
      (res) => {
        //invocar la palabra recervada localStorage
        sessionStorage.setItem('token', res.jwt);
        localStorage.setItem('rol', res.user.role.type);
        localStorage.setItem('Username', res.user.username);
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 6000,
          timerProgressBar: true,
          icon: 'success',
          title: 'Bienvenido' + ' ' + res.user.username,
        });
        //ruteo con variable para que mande a otro sitio
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        if (err) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 10000,
            timerProgressBar: true,
            icon: 'error',
            title:
              'Correo electronico o contraseña incorrectos' +
              ' ' +
              'puede que la cuenta esta debilitada comunicase con su administrador',
          });
        }
      }
    );
  }
}
