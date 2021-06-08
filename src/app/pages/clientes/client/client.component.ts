import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: [
    './client.component.css',
    '../../../../assets/css-admin/sb-admin-2.css',
  ],
})
export class ClientComponent implements OnInit {
  clientes: any;
  cliente = {
    firstname: '',
    lastname: '',
    address: '',
    number_address: '',
    suburb: '',
    city: '',
    state: '',
    zip: '',
    _id: '',
  };
  estados: any;
  estado = {
    estado: '',
  };

  constructor(
    public auth: AuthService,
    private client: ClientService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getstate();
  }

  getstate() {
    this.client.getstate().subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  saveCliente() {
    this.client.createClients(this.cliente).subscribe(
      (res) => {
        console.log(res);
        this.toastr.success('Cliente Registrado');
      },
      (err) => console.log(err)
    );
    this.limpiarCampos();
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
    this.clientes = null;
    this.cliente.firstname = '';
    this.cliente.lastname = '';
    this.cliente.address = '';
    (this.cliente.number_address = ''),
      (this.cliente.suburb = ''),
      (this.cliente.city = ''),
      (this.cliente.state = ''),
      (this.cliente.zip = '');
  }
  clean() {
    this.clientes = null;
    this.cliente.firstname = '';
    this.cliente.lastname = '';
    this.cliente.address = '';
    (this.cliente.number_address = ''),
      (this.cliente.suburb = ''),
      (this.cliente.city = ''),
      (this.cliente.state = ''),
      (this.cliente.zip = '');
  }
}
