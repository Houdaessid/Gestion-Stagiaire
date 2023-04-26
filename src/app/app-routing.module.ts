import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListeDemandeComponent } from './liste-demande/liste-demande.component';
import { NouveauDemandeComponent } from './nouveau-demande/nouveau-demande.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { AdminComponent } from './admin/admin.component';
import { AuthentificationComponent } from './authentification/authentification.component'; 
import { AuthentificationGuard } from './authentification.guard';
const routes: Routes = [
  {path:'accueil',component:AccueilComponent},
  {path :'nouveau',component :NouveauDemandeComponent},
  {path:'liste',component:ListeDemandeComponent},
  {path:'specialite',component:SpecialiteComponent},
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'auth',component:AuthentificationComponent},
  {path:'admin',component:AdminComponent,canActivate:[AuthentificationGuard]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
