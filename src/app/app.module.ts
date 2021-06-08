import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Reactive Form
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { ClientComponent } from './pages/clientes/client/client.component';
import { ClientGroupsComponent } from './pages/administracion/client-groups/client-groups.component';
import { GroupComponent } from './pages/administracion/group/group.component';

//importaciones
import { SidebarModule } from 'ng-sidebar';
import { ListClientComponent } from './pages/clientes/list-client/list-client.component';
import { SearchClientComponent } from './pages/clientes/search-client/search-client.component';
import { ToastrModule } from 'ngx-toastr';

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
    SearchClientComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [AuthService, UsersService, ClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
