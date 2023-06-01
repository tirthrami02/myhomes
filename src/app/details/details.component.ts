import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersComponent
  ],
  template: `
  <article>
    <img class="listing-photo" [src]="housingLocation?.photo"
      alt="Exterior photo of {{housingLocation?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{housingLocation?.availableUnits}}</li>
        <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
        <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">   
        <!-- using event handler
              here, (submit) = "submitApplication" ma
              submit e niche aaple "Apply Now button no type chhe" and
              submitApplication() e define kerelu function chhe aa j file ma
        -->
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">

        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>
    <section class="results">
        <app-users *ngFor="let user of this.housingService.users" [user]="user"></app-users>
    </section>
  </article>
`,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: Housinglocation | undefined;
  
  housingLocationId: number = -1;
  
  applyForm = new FormGroup({       // initiated entity of the forms
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);
  }

  // constructor() {
  //   const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
  //   this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
  //     this.housingLocation = housingLocation;
  //   });
  // }
  
  submitApplication() {
    this.housingService.submitApplication(this.applyForm.value.firstName ?? '', this.applyForm.value.lastName ?? '', this.applyForm.value.email ?? '');
  }
}
