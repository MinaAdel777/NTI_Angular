import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthoService } from '../services/autho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
  constructor(private _autho: AuthoService, private _router: Router) {}
  
  login(loginForm: NgForm) {
    this._autho.login(loginForm.value).subscribe({
      next: () => {
        this._router.navigate(['/dashboard']);
        console.log(this._autho.decodeAccessToken());
      },
      error: (err) => console.log(err.message),
    });
    console.log(loginForm.value);
  }
}
