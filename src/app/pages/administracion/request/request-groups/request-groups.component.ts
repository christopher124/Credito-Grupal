import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RequestService, Request } from 'src/app/services/request.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { RequestClientService } from 'src/app/services/request-client.service';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-request-groups',
  templateUrl: './request-groups.component.html',
  styleUrls: [
    './request-groups.component.css',
    '../../../../../assets/css-admin/sb-admin-2.css',
  ],
})
export class RequestGroupsComponent implements OnInit {
  editing = false;
  username = localStorage.getItem('Username');

  solicitudes: any;
  solicitud: Request = {
    status: '',
    amount_requested: '',
    requests_user: '',
    group: '',
  };

  grupos: any;
  grupo = {
    id: '',
    groupname: '',
    groupleader: '',
  };

  constructor(
    public auth: AuthService,
    private request: RequestService,
    private group: GroupService,
    private activatedRoute: ActivatedRoute,
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
    this.consultGroup();
  }
  saveRequest() {
    console.log(this.solicitud.group);

    if (this.solicitud) {
      this.request.createRequest(this.solicitud).subscribe((res) => {
        this.limpiarCampos();
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          icon: 'success',
          title: 'Solicitud registrada',
        });
      });
    } else if (this.solicitud == this.consultGroup()) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        icon: 'success',
        title: 'nel carnal',
      });
    }
  }
  consultGroup() {
    this.group.getGrops().subscribe(
      (res) => {
        console.log(res);

        this.grupos = res;
      },
      (err) => console.log(err)
    );
  }
  limpiarCampos() {
    this.solicitud.status = '';
    this.solicitud.amount_requested = '';
    this.solicitud.requests_user = '';
  }
  updateRequest() {
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
