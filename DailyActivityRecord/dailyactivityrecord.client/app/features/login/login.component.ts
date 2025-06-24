import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = '';
  //templateUrl = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (res: { token: string }) => {
        localStorage.setItem('jwtToken', res.token);
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        console.error('Login failed:', err);
      }
    });
  }
}
