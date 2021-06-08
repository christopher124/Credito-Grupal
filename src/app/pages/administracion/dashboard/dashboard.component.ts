import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.css',
    '../../../../assets/css-admin/sb-admin-2.css',
  ],
})
export class DashboardComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
