import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: [
    './list-client.component.css',
    '../../../../assets/css-admin/sb-admin-2.css',
  ],
})
export class ListClientComponent implements OnInit {
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

  constructor(
    public auth: AuthService,
    private client: ClientService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCliente();
  }
  deleteCliente(id: string) {
    this.client.deleteClients(id).subscribe(
      (res) => {
        this.getCliente();
        this.toastr.success('Cliente Eliminado');
      },
      (err) => console.log(err)
    );
  }
  getCliente() {
    this.client.getClients().subscribe(
      (res) => {
        this.clientes = res;
      },
      (err) => console.log(err)
    );
  }
}
