import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-nouveau-demande',
  templateUrl: './nouveau-demande.component.html',
  styleUrls: ['./nouveau-demande.component.css'],
})
export class NouveauDemandeComponent implements OnInit {
  public nom: string = '';
  public prenom: string = '';
  public email: string = '';
  public telephone: string = '';
  public adresse: string = '';
  public specialite: string = '';
  public message: string = '';
  constructor(private router: Router, private _apiService: ApiService) {}

  ngOnInit(): void {}

  public save(
    nom: string,
    prenom: string,
    email: string,
    telephone: string,
    adresse: string,
    specialite: string,
    message: string
  ): void {
    this._apiService
      .insertStagiaire({
        nom,
        prenom,
        email,
        telephone,
        adresse,
        specialite,
        message,
      })
      .subscribe((data) => {
        window.location.reload();
      });
  }
}
