import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  username = '';
  password = '';
  role = 'Parent';
  errorMessage = ''; 

  constructor(private authService: AuthService, private router: Router) { }

  onInputChange() {
    this.errorMessage = '';
  }

  register() {
    console.log('Form submitted');
    this.authService.register({
      username: this.username,
      password: this.password,
      role: this.role
    }).subscribe({
      next: (res) => {
        localStorage.setItem('jwtToken', res.token);
        this.router.navigate(['/login']);//let successful user go to the login screen -> thereafter user should go to the dashboard where the ability to create child will be
      },
      error: (err) => {
        if (err.status === 400 && err.err === 'Username already taken.') {
          this.errorMessage = 'That username is already in use. Please choose another.';
        } else {
          this.errorMessage = 'Something went wrong. Please try again later.';
        }
        console.error(err);
      }
    });
  }
}
