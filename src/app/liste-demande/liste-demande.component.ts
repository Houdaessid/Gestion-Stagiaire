import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Stagiaire } from '../stagiaire';

@Component({
  selector: 'app-liste-demande',
  templateUrl: './liste-demande.component.html',
  styleUrls: ['./liste-demande.component.css']
})
export class ListeDemandeComponent  {
  title = 'stagiaire';
  data: Stagiaire[] = [];
  constructor(private _apiService: ApiService) {
   
  }
  ngOnInit() {
    this._apiService.getStagiaires().subscribe((res: any) => {
      this.data = res;
    });
  }

  public accepter(id: any) {
    this._apiService.accepterStagiaire(id).subscribe((res: any) => {
      this.data = res;
    });
  }

  public refuser(id: any) {
    this._apiService.deleteStagiaire(id).subscribe((res: any) => {
      this.data = res;
    });
  }

}
  


