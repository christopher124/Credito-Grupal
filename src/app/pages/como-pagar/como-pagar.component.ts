import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-como-pagar',
  templateUrl: './como-pagar.component.html',
  styleUrls: ['./como-pagar.component.css', '../../../assets/css/style.css'],
})
export class ComoPagarComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Como pagar - Credito grupal');
  }
}
