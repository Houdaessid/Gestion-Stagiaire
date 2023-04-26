import { Component, OnInit } from '@angular/core';
import { Stagiaire } from './stagiaire';
import { StagiaireService } from './stagiaire.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  stagiaires: Stagiaire[] = [];
  error = '';
  success = '';
  constructor(private stagiaireService: StagiaireService) {
  }
        
  ngOnInit() {
   this.getstagiaires()
  }
  getstagiaires(): void {
    this.stagiaireService.getAll().subscribe(
      (data: Stagiaire[]) => {
        this.stagiaires = data;
        this.success = 'successful retrieval of the list';
      },
      (err) => {
        console.log(err);
        this.error = err;
      }
    );
  }
}
