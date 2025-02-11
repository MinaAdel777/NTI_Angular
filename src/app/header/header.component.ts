import { Component, OnInit } from '@angular/core';
import { AuthoService } from '../services/autho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(private _auth: AuthoService, private _router: Router) {}
  isLoggedIn = false;
  ngOnInit(): void {
    this._auth.getAccessToken().subscribe((data) => {
      if (data) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }
  // Property to toggle the navbar's visibility
  isNavbarActive: boolean = false;

  // Method to show the navbar
  menubar() {
    this.isNavbarActive = true;
  }

  // Method to hide the navbar
  closeNavbar() {
    this.isNavbarActive = false;
  }

  logout(): void {
    console.log('Logging out');
    this._router.navigate(['/login']);
    this._auth.logout();
  }
}
