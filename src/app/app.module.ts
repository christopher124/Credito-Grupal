import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Reactive Form
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//guard
import { GuardMenuGuard } from './guard/guard-menu.guard';

//Servicios
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { ClientService } from './services/client.service';
// componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './search/navbar/navbar.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ComoPagarComponent } from './pages/como-pagar/como-pagar.component';
import { Error404Component } from './pages/error404/error404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/administracion/dashboard/dashboard.component';
import { ClientComponent } from './pages/administracion/clients/client/client.component';
import { ClientGroupsComponent } from './pages/administracion/client-groups/client-groups.component';
import { GroupComponent } from './pages/administracion/groups/group/group.component';

//importaciones
import { SidebarModule } from 'ng-sidebar';
import { ListClientComponent } from './pages/administracion/clients/list-client/list-client.component';
import { ToastrModule } from 'ngx-toastr';
import { FilterPipe } from './pipes/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserComponent } from './pages/administracion/users/user/user.component';
import { ListUserComponent } from './pages/administracion/users/list-user/list-user.component';
import { ListGroupComponent } from './pages/administracion/groups/list-group/list-group.component';
import { FilterUserPipe } from './pipes/filter-user.pipe';
import { FilterGroupPipe } from './pipes/filter-group.pipe';
import { RequestGroupsComponent } from './pages/administracion/request/request-groups/request-groups.component';
import { RequestUsersComponent } from './pages/administracion/request/request-users/request-users.component';
import { ListRequestComponent } from './pages/administracion/request/list-request/list-request.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NosotrosComponent,
    ContactoComponent,
    ComoPagarComponent,
    Error404Component,
    DashboardComponent,
    ClientComponent,
    ClientGroupsComponent,
    GroupComponent,
    ListClientComponent,
    FilterPipe,
    UserComponent,
    ListUserComponent,
    ListGroupComponent,
    FilterUserPipe,
    FilterGroupPipe,
    RequestGroupsComponent,
    RequestUsersComponent,
    ListRequestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot(),
    ToastrModule.forRoot(),
    NgxPaginationModule,
  ],
  providers: [GuardMenuGuard, AuthService, UsersService, ClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
