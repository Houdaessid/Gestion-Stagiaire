import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-demande',
  templateUrl: './nouveau-demande.component.html',
  styleUrls: ['./nouveau-demande.component.css']
})
export class NouveauDemandeComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){

    this.router.navigate(['stagiaire'])
  }
  // ajouter(){

  // }

}
