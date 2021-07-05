import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';
import { GroupService, Group } from 'src/app/services/group.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: [
    './group.component.css',
    '../../../../../assets/css-admin/sb-admin-2.css',
  ],
})
export class GroupComponent implements OnInit {
  editing = false;
  username = localStorage.getItem('Username');

  grupos: any;
  grupo: Group = {
    groupname: '',
    groupleader: '',
  };

  clientes: any;

  constructor(
    public auth: AuthService,
    private group: GroupService,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private client: ClientService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('grupoId')) {
        this.editing = true;
        this.group
          .getGropsById(paramMap.get('grupoId') || '')
          .subscribe((res) => (this.grupo = res));
      }
    });
    this.title.setTitle('Crear Grupo - Credito grupal');
    this.consultClient();
  }
  saveGroup() {
    this.group.createGrops(this.grupo).subscribe(
      (res) => {
        console.log(this.grupo);
      },
      (err) => console.log(err)
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
  limpiarCampos() {
    this.grupo.groupleader = '';
    this.grupo.groupname = '';
  }
  updateGroup() {
    this.group
      .updateGrops(this.grupo._id, {
        groupname: this.grupo.groupname,
        groupleader: this.grupo.groupleader,
      })
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
  }
}
