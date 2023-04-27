import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeDemandeComponent } from './liste-demande/liste-demande.component';
import { NouveauDemandeComponent } from './nouveau-demande/nouveau-demande.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'nouveau', component: NouveauDemandeComponent },
  { path: 'specialite', component: SpecialiteComponent },
  { 
    path: 'liste', 
    component: ListeDemandeComponent, 
    canActivate: [AuthGuard] 
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
