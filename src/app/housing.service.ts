import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';
import { users } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
  
export class HousingService {

  users: users[] = [];
  housingLocationList: Housinglocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '/assets/he.jpeg',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: '/assets/ola.jpeg',
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: '/assets/he.jpeg',
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '/assets/ola.jpeg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: '/assets/he.jpeg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: '/assets/ola.jpeg',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: '/assets/he.jpeg',
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: '/assets/ola.jpeg',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: '/assets/he.jpeg',
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: '/assets/ola.jpeg',
      availableUnits: 6,
      wifi: true,
      laundry: true
    }
  ];
  getAllHousingLocations(): Housinglocation[] {
    return this.housingLocationList;
  }

  // url = 'http://localhost:3000/locations';

  // async getAllHousingLocations(): Promise<Housinglocation[]> {
  //   const data = await fetch(this.url);
  //   return await data.json() ?? [];
  // }

  getHousingLocationById(id: number): Housinglocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  // async getHousingLocationById(id: number): Promise<Housinglocation | undefined> {
  //   const data = await fetch(`${this.url}/${id}`);
  //   return await data.json() ?? {};
  // }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
    this.users.push({ firstName, lastName, email });
  }
}