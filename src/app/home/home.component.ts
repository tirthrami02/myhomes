import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { inject } from '@angular/core';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city." #filter_o>
      <button class="primary" type="button" (click)="filterResults(filter_o.value)">Search</button>
    </form>
  </section>
  <section class="results">
<app-housing-location
  *ngFor="let housingLocation of filteredLocationList"
  [housingLocation]="housingLocation">
</app-housing-location>    
</section>
  `,

  // here ola_housingLocation is from this file i.e. homecomponent itself and it goes to
  // app-housing-location file as a housingLocation.
  // aama "housingLocation" naam thi j value app-housing-location ma jashe
  // So app-housing-location file ma @Input() ma eej naam thi aa imported value ne call kari shakaay.
  // banne no data type Housinglocation e banne file ma import thashe.

  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: Housinglocation[] = [];

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
  
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  // constructor() {
  //   this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[]) => {
  //     this.housingLocationList = housingLocationList;
  //     this.filteredLocationList = housingLocationList;
  //   });
  // }
}

