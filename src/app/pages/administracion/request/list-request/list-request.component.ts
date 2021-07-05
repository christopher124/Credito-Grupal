import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { RequestService } from 'src/app/services/request.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrls: [
    './list-request.component.css',
    '../../../../../assets/css-admin/sb-admin-2.css',
  ],
})
export class ListRequestComponent implements OnInit {
  username = localStorage.getItem('Username');
  filterPost = '';

  solicitudes: any;

  solicitud = {
    status: '',
    amount_requested: '',
    requests_user: '',
    createdAt: '',
  };

  constructor(
    public auth: AuthService,
    private request: RequestService,
    private title: Title
  ) {}
  ngOnInit(): void {
    this.getRequest();
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
        this.request.deleteRequest(id).subscribe((res) => {
          this.getRequest();
        });
      }
    });
  }
  getRequest() {
    this.request.getRequest().subscribe(
      (res) => {
        console.log(res);

        this.solicitudes = res;
      },
      (err) => console.log(err)
    );
  }
}
