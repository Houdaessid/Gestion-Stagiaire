import { Component } from '@angular/core';
import { StorageService } from '../auth/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLoggedIn = false;

  constructor(private storageService: StorageService,private _router: Router) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

  logout() {
    this.storageService.logout();
    this.isLoggedIn = false;
    this._router.navigateByUrl('/');
  }
}
