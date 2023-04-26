import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { NouveauDemandeComponent } from './nouveau-demande/nouveau-demande.component';
import { ListeDemandeComponent } from './liste-demande/liste-demande.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    SpecialiteComponent,
    NouveauDemandeComponent,
    ListeDemandeComponent,
    HeaderComponent,
    FooterComponent,
    AuthentificationComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
