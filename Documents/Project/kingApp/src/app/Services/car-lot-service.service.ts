import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarLotServiceService {

  car1: string[] = ['Lumma Design Adorns BMW X7', '2020', 'Lash Blue', '15800KM', '5-Seats', 'Automatic', '1200000'];

  getInfo1(): string[] {
    return this.car1;
  }

  // tslint:disable-next-line:member-ordering
  car2: string[] = ['BMW M5 First Look', '2021', 'ras red', '1500KM', '5-Seats', 'Automatic', '850000'];

  getM5Info(): string[] {
    return this.car2;
  }

  // tslint:disable-next-line:member-ordering
  car3: string[] = ['Mexico Blue Audi RS5', '2019', 'Sea Blue', '2500KM', '5-Seats', 'Automatic', '700000'];

  getRS5Info(): string[] {
    return this.car3;
  }

  constructor() { }
}
