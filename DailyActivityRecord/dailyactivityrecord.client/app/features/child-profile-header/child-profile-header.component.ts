import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-profile-header',
  standalone: false,
  templateUrl: './child-profile-header.component.html',
  styleUrl: './child-profile-header.component.css',
  template: `
    <div class="profile-header">
      <h2>{{ child?.name }}</h2>
      <p><strong>Date of Birth:</strong> {{ child?.dob | date }}</p>
      <div *ngIf="child?.notes" class="alert alert-warning">
        <strong>Important Notes:</strong> {{ child?.notes }}
      </div>
    </div>
  `,
  styles: [`
    .profile-header {
      background: #f0f4f8;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    .alert {
      margin-top: 10px;
    }
  `]
})
export class ChildProfileHeaderComponent {

  @Input() child: any;

}
