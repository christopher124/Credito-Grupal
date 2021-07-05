import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';
import {
  RequestClient,
  RequestClientService,
} from 'src/app/services/request-client.service';
import { RequestService } from 'src/app/services/request.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-request-users',
  templateUrl: './request-users.component.html',
  styleUrls: [
    './request-users.component.css',
    '../../../../../assets/css-admin/sb-admin-2.css',
  ],
})
export class RequestUsersComponent implements OnInit {
  editing = false;

  solicitudesCliente: any;
  solicitud: RequestClient = {
    amount: '',
    client: '',
    requests_group: '',
  };
  solicitudes: any;

  clientes: any;

  username = localStorage.getItem('Username');

  constructor(
    public auth: AuthService,
    private RequestClientService: RequestClientService,
    private client: ClientService,
    private request: RequestService,
    private title: Title
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe((paramMap) => {
    //   if (paramMap.get('grupoId')) {
    //     this.editing = true;
    //     this.group
    //       .getGropsById(paramMap.get('grupoId') || '')
    //       .subscribe((res) => (this.grupo = res));
    //   }
    // });
    this.title.setTitle('Crear Solicitud - Credito grupal');
    this.consultClient();
    this.consultRequest();
  }
  saveRequestClient() {
    this.RequestClientService.createRequest(this.solicitud).subscribe(
      (res) => {
        this.limpiarCampos();
        console.log(res);

        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          icon: 'success',
          title: 'Solicitud registrada',
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
  consultClient() {
    this.client.getClients().subscribe(
      (res) => {
        this.clientes = res;
      },
      (err) => console.log(err)
    );
  }
  consultRequest() {
    this.request.getRequest().subscribe(
      (res) => {
        console.log(res);

        this.solicitudes = res;
      },
      (err) => console.log(err)
    );
  }
  limpiarCampos() {
    this.solicitud.amount = '';
    this.solicitud.client = '';
    this.solicitud.requests_group = '';
  }
  updateRequestClient() {
    // this.request
    //   .updateRequest(this.grupo._id, {
    //     groupname: this.grupo.groupname,
    //     groupleader: this.grupo.groupleader,
    //   })
    //   .subscribe(
    //     (res) => console.log(res),
    //     (err) => console.log(err)
    //   );
  }
}
