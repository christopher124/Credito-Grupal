import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: [
    './list-user.component.css',
    '../../../../../assets/css-admin/sb-admin-2.css',
  ],
})
export class ListUserComponent implements OnInit {
  filterPostcliente = '';
  editing = false;
  username = localStorage.getItem('Username');

  usuarios: any;
  usuario = {
    email: '',
    username: '',
    password: '',
  };
  constructor(
    public auth: AuthService,
    private user: UsersService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.title.setTitle('Lista de clientes - Credito grupal');
  }
  deleteUser(id: string) {
    Swal.fire({
      title: ' ¿Estas seguro de eliminar?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, bórralo!',
      cancelButtonText: 'No, Cancelar!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('¡Eliminado!', 'El Usuario ha sido eliminado.', 'success');
        this.user.deleteUsers(id).subscribe((res) => {
          this.getUsers();
        });
      }
    });
  }
  getUsers() {
    this.user.getUsers().subscribe(
      (res) => {
        this.usuarios = res;
      },
      (err) => console.log(err)
    );
  }
}
