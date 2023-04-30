import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public loginValid = true;
  public email = 'admin@exemple.com';
  public password = 'password123';

  constructor(private _router: Router, private _apiService: ApiService) {}

  public ngOnInit(): void {}

  public login(email: string, password: string): void {
    this._apiService.signIn(email, password).subscribe((data) => {
      if (data === false) {
        this.loginValid = false;
      } else {
        this._router.navigateByUrl('/');
      }
    });
  }
}
