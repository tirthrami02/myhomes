import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
  <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
  </section>
  <a [routerLink]="['/details',housingLocation.id]">Learn More</a>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {

  @Input() housingLocation !: Housinglocation;

}

/*
Have Aama in parent component HTML file
<child-component [item] = "ola"></child-component>

and in parent component TS file

export class ClassName{
  ola: "Tirth";
}

and child component ni TS file ma
export class ClassName{
@Input() item: '' // decore
}

and child component ni HTML file ma
<p>My name is {{item}}</p>

aama thaay
*/