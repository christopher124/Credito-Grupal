import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService, Clients, cod } from 'src/app/services/client.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: [
    './client.component.css',
    '../../../../../assets/css-admin/sb-admin-2.css',
  ],
})
export class ClientComponent implements OnInit {
  editing = false;
  username = localStorage.getItem('Username');

  cliente: Clients = {
    firstname: '',
    lastname: '',
    address: '',
    number_int_address: '',
    suburb: '',
    city: '',
    state: '',
    zip: '',
    tel: '',
  };

  codigos: any = {
    cp: '',
  };
  clientes: any = {};

  constructor(
    public auth: AuthService,
    private client: ClientService,
    private activatedRoute: ActivatedRoute,
    private title: Title
  ) {}

  buscar(termino: string) {
    this.client.getCp(termino).subscribe((data) => {
      console.log(data.response);
      this.codigos = data.response;
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('clienteId')) {
        this.editing = true;
        this.client
          .getPostById(paramMap.get('clienteId') || '')
          .subscribe((res) => (this.cliente = res));
      }
    });

    this.title.setTitle('Crear cliente - Credito grupal');
  }

  saveCliente() {
    if (!this.cliente) {
      console.log(this.cliente);
      console.log(this.ConsulEmpleado);

      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        icon: 'error',
        title: 'El cliente ya existe',
      });
    } else {
      this.client.createClients(this.cliente).subscribe((res) => {
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
      });
    }
  }
  ConsulEmpleado() {
    this.client.getClients().subscribe(
      (res) => {
        this.clientes = res;
      },
      (err) => console.log(err)
    );
  }
  limpiarCampos() {
    this.cliente.firstname = '';
    this.cliente.lastname = '';
    this.cliente.address = '';
    (this.cliente.number_int_address = ''),
      (this.cliente.suburb = ''),
      (this.cliente.city = ''),
      (this.cliente.state = ''),
      (this.cliente.zip = '');
    this.cliente.tel = '';
  }
  updateCliente() {
    this.client
      .updateClients(this.cliente._id, {
        firstname: this.cliente.firstname,
        lastname: this.cliente.lastname,
        address: this.cliente.address,
        number_int_address: this.cliente.number_int_address,
        suburb: this.cliente.suburb,
        city: this.cliente.city,
        state: this.cliente.state,
        zip: this.cliente.zip,
        tel: this.cliente.tel,
      })
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
  }
}
