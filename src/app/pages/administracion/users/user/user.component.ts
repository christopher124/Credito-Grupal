import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService, Users } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [
    './user.component.css',
    '../../../../../assets/css-admin/sb-admin-2.css',
  ],
})
export class UserComponent implements OnInit {
  editing = false;
  usernamee = localStorage.getItem('Username');

  usuario: Users = {
    email: '',
    username: '',
    password: '',
  };

  constructor(
    public auth: AuthService,
    private user: UsersService,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('usuarioId')) {
        this.editing = true;
        this.user
          .getUsersById(paramMap.get('usuarioId') || '')
          .subscribe((res) => (this.usuario = res));
      }
    });
    this.title.setTitle('Crear cliente - Credito grupal');
  }

  saveUsuario() {
    this.user.createUsers(this.usuario).subscribe(
      (res) => {
        this.limpiarCampos();
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          icon: 'success',
          title: 'Cliente registrado',
        });
      },
      (err) => {
        console.log(err);

        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          icon: 'error',
          title: 'Correo o nombre de usuario ya utilizados intente nuevamente',
        });
      }
    );
  }
  gateUsuario() {
    this.user.getUsers().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }
  limpiarCampos() {
    this.usuario.email = '';
    this.usuario.username = '';
    this.usuario.password = '';
  }
  updateUsuario() {
    this.user
      .updateClients(this.usuario.id, {
        email: this.usuario.email,
        password: this.usuario.password,
        username: this.usuario.username,
      })
      .subscribe(
        (res) => {
          this.router.navigate(['/user-list']);
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            icon: 'success',
            title: 'Usuario Modificado',
          });
        },

        (err) => console.log(err)
      );
  }
}
