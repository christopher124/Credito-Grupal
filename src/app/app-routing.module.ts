import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import { ClientComponent } from './pages/administracion/clients/client/client.component';
import { DashboardComponent } from './pages/administracion/dashboard/dashboard.component';
import { ComoPagarComponent } from './pages/como-pagar/como-pagar.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ListClientComponent } from './pages/administracion/clients/list-client/list-client.component';
import { UserComponent } from './pages/administracion/users/user/user.component';
import { ListUserComponent } from './pages/administracion/users/list-user/list-user.component';
import { GroupComponent } from './pages/administracion/groups/group/group.component';
import { ListGroupComponent } from './pages/administracion/groups/list-group/list-group.component';

//guard
import { GuardMenuGuard } from './guard/guard-menu.guard';
import { RequestGroupsComponent } from './pages/administracion/request/request-groups/request-groups.component';
import { RequestUsersComponent } from './pages/administracion/request/request-users/request-users.component';
import { ListRequestComponent } from './pages/administracion/request/list-request/list-request.component';

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
    data: {
      title: 'Como pagar - Credito grupal',
    },
  },
  {
    path: 'dashboard',
    data: { title: 'Dashboard - Credito grupal' },
    component: DashboardComponent,
  },
  {
    path: 'client-new',
    data: { title: 'Crear cliente - Credito grupal' },
    component: ClientComponent,
  },
  {
    path: 'client-list',
    data: { title: 'Lista de clientes - Credito grupal' },
    component: ListClientComponent,
  },
  { path: 'client-update/edit/:clienteId', component: ClientComponent },
  {
    path: 'user-new',
    data: { title: 'Crear usuario - Credito grupal' },
    component: UserComponent,
  },
  {
    path: 'user-list',
    data: { title: 'Lista de usuarios - Credito grupal' },
    component: ListUserComponent,
  },
  { path: 'user-update/edit/:usuarioId', component: UserComponent },
  {
    path: 'group-new',
    data: { title: 'Crear Grupo - Credito grupal' },
    component: GroupComponent,
  },
  {
    path: 'group-list',
    data: { title: 'Lista de Grupo - Credito grupal' },
    component: ListGroupComponent,
  },
  { path: 'group-update/edit/:grupoId', component: GroupComponent },
  {
    path: 'requests-new',
    data: { title: 'Crear Solicitud - Credito grupal' },
    component: RequestGroupsComponent,
  },
  {
    path: 'requests-client-new',
    data: { title: 'Crear Solicitud clientes - Credito grupal' },
    component: RequestUsersComponent,
  },
  {
    path: 'requests-list',
    data: { title: 'Lista de Solicitud - Credito grupal' },
    component: ListRequestComponent,
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
