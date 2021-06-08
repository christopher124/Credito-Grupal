import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService, Post } from '../../services/users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = {
    identifier: '',
    password: '',
  };

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {}
  login(identifier: string, password: string) {
    //metodo subscribe para trabajar la respuesta que viene de express
    this.auth.login(identifier, password).subscribe(
      (res) => {
        console.log(res);
        //invocar la palabra recervada localStorage
        localStorage.setItem('token', res.jwt);
        localStorage.setItem('rol', res.user.role.type);
        alert('bien');
        //ruteo con variable para que mande a otro sitio
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        console.log(err);
        alert('error');
      }
    );
  }
}
