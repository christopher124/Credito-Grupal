import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { GroupService } from 'src/app/services/group.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: [
    './list-group.component.css',
    '../../../../../assets/css-admin/sb-admin-2.css',
  ],
})
export class ListGroupComponent implements OnInit {
  filterPostGroup = '';
  editing = false;
  username = localStorage.getItem('Username');

  grupos: any;
  grupo = {
    groupname: '',
    groupleader: '',
  };
  loading?: boolean;

  constructor(
    public auth: AuthService,
    private group: GroupService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.getGroups();
    this.title.setTitle('Lista de clientes - Credito grupal');
  }

  deleteGroups(id: string) {
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
        Swal.fire('¡Eliminado!', 'El cliente ha sido eliminado.', 'success');
        this.group.deleteGrops(id).subscribe((res) => {
          this.getGroups();
        });
      }
    });
  }
  getGroups() {
    this.loading = true;
    this.group.getGrops().subscribe(
      (data) => {
        this.grupos = data;
        console.log(data);

        this.loading = false;
      },
      (err) => console.log(err)
    );
  }
}
