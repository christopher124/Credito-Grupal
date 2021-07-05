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
  };
  codigos: any;
  codigo: cod = {
    cp: '',
    estado: '',
  };

  constructor(
    public auth: AuthService,
    private client: ClientService,
    private activatedRoute: ActivatedRoute,
    private title: Title
  ) {}

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

  getCp() {
    this.client.getCp(this.codigo.cp).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  saveCliente() {
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
  ConsulEmpleado() {
    this.client.getClients().subscribe(
      (res) => {
        console.log(res);
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
      })
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
  }
}
