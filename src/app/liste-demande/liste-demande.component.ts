import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liste-demande',
  templateUrl: './liste-demande.component.html',
  styleUrls: ['./liste-demande.component.css']
})
export class ListeDemandeComponent  {
  title = 'stagiaire';
  data = [];
  constructor(private http:HttpClient) {
    this.http.get('http://localhost/employee.php').subscribe(data => {
    this.data.push();
    console.log(this.data);
    }, error => console.error(error));
  }
}
  


