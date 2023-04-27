import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeDemandeComponent } from './liste-demande/liste-demande.component';
import { NouveauDemandeComponent } from './nouveau-demande/nouveau-demande.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { AdminComponent } from './admin/admin.component';
import { AuthentificationGuard } from './authentification.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'nouveau', component: NouveauDemandeComponent },
  { path: 'liste', component: ListeDemandeComponent },
  { path: 'specialite', component: SpecialiteComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthentificationGuard],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
