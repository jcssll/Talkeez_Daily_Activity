import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  username = '';
  password = '';
  role = 'Parent';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.register({
      username: this.username,
      password: this.password,
      role: this.role
    }).subscribe({
      next: (res) => {
        localStorage.setItem('jwtToken', res.token);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
