import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: [
    './list-client.component.css',
    '../../../../../assets/css-admin/sb-admin-2.css',
  ],
})
export class ListClientComponent implements OnInit {
  filterPost = '';
  editing = false;
  username = localStorage.getItem('Username');

  clientes: any;
  cliente = {
    firstname: '',
    lastname: '',
    address: '',
    number_int_address: '',
    suburb: '',
    city: '',
    state: '',
    zip: '',
    id: '',
  };
  loading?: boolean;

  constructor(
    public auth: AuthService,
    private client: ClientService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.getCliente();
    this.title.setTitle('Lista de clientes - Credito grupal');
  }
  deleteCliente(id: string) {
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
        this.client.deleteClients(id).subscribe((res) => {
          this.getCliente();
        });
      }
    });
  }
  getCliente() {
    this.loading = true;
    this.client.getClients().subscribe(
      (res) => {
        this.clientes = res;
        this.loading = false;
      },
      (err) => console.log(err)
    );
  }

  editCliente(id: string) {
    console.log(id);
  }
}
