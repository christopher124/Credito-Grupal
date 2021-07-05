import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';
import { GroupService } from 'src/app/services/group.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.css',
    '../../../../assets/css-admin/sb-admin-2.css',
  ],
})
export class DashboardComponent implements OnInit {
  username = localStorage.getItem('Username');

  CountClient = localStorage.getItem('CountClient');
  CountUser = localStorage.getItem('CountUser');
  CountGroup = localStorage.getItem('CountGroup');

  constructor(
    public auth: AuthService,
    private title: Title,
    private client: ClientService,
    private user: UsersService,
    private group: GroupService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Dashboard - Credito grupal');
    this.client.getCount().subscribe(
      (res) => localStorage.setItem('CountClient', res),
      (err) => console.log(err)
    );
    this.user.getCount().subscribe(
      (res) => localStorage.setItem('CountUser', res),
      (err) => console.log(err)
    );
    this.group.getCount().subscribe(
      (res) => localStorage.setItem('CountGroup', res),
      (err) => console.log(err)
    );
  }
}
