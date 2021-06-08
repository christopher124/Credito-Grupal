import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: [
    './search-client.component.css',
    '../../../../assets/css-admin/sb-admin-2.css',
  ],
})
export class SearchClientComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
