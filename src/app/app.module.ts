import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './components/portada/portada.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';
import { ShowGameComponent } from './views/show-game/show-game.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { FooterComponent } from './views/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    HomeComponent,
    ShowGameComponent,
    LoginComponent,
    RegisterComponent,
    ErrorPageComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
