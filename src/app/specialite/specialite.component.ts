import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit{
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.router.navigate(['stagiaire'])
  }

}
