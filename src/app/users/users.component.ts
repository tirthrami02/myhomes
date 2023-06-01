import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { users } from '../housinglocation';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <h2 class="listing-heading">{{user.firstName}} {{user.lastName}}</h2><br>
      <h2 class="listing-heading">{{user.email}}</h2>
    </section>
  `,
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  @Input() user !: users;
}
