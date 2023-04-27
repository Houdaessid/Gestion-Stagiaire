import { Component, OnInit } from '@angular/core';
import { Stagiaire } from './stagiaire';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  stagiaires: Stagiaire[] = [];
  error = '';
  success = '';
  constructor() {
  }
        
  ngOnInit() {
  }

}
