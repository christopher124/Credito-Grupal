import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './pages/clientes/client/client.component';
import { DashboardComponent } from './pages/administracion/dashboard/dashboard.component';
import { ComoPagarComponent } from './pages/como-pagar/como-pagar.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ListClientComponent } from './pages/clientes/list-client/list-client.component';
import { SearchClientComponent } from './pages/clientes/search-client/search-client.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Inicio - Credito grupal' },
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
    data: { title: 'Nosotros - Credito grupal' },
  },
  {
    path: 'contacto',
    component: ContactoComponent,
    data: { title: 'Contacto - Credito grupal' },
  },
  {
    path: 'como-pagar',
    component: ComoPagarComponent,
    data: { title: 'Como pagar - Credito grupal' },
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'client-new',
    component: ClientComponent,
  },
  {
    path: 'client-list',
    component: ListClientComponent,
  },
  {
    path: 'client-search',
    component: SearchClientComponent,
  },
  {
    path: '**',
    component: Error404Component,
    data: { title: 'error 404 - Credito grupal' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
