import { Component, OnInit } from '@angular/core';
import { CarLotServiceService } from '../Services/car-lot-service.service';

@Component({
  selector: 'app-dash-items',
  templateUrl: './dash-items.component.html',
  styleUrls: ['./dash-items.component.css']
})
export class DashItemsComponent implements OnInit {

  Cars: any = [
    {
      id: 1,
      carName: 'Lumma Design Adorns BMW X7',
      year: '2020',
      color: 'Lash Blue',
      image: 'https://th.bing.com/th/id/Rd4f28141393012ed42e555128236d11c?rik=bs6OX%2b2rnRNwzw&pid=ImgRaw',
      price: 1200000,
    },
    {
      id: 2,
      carName: 'BMW M5 First Look',
      year: '2021',
      color: 'ras red',
      image: 'https://www.automobilemag.com/uploads/sites/11/2020/06/2021-BMW-M5-LEAD.jpg',
      price: 850000,
    },
    {
      id: 3,
      carName: 'Mexico Blue Audi RS5',
      year: '2019',
      color: 'Sea Blue',
      image: 'https://pacificgerman.com/Files/Images/projects/2019-mexico-blue-audi-rs5/img2.jpg',
      price: 700000,
    },
    {
      id: 4,
      carName: 'Matt Black Audi RS7 on Velgen Wheels',
      year: '2019',
      color: 'Mate Black',
      image: 'https://th.bing.com/th/id/OIP.7BSztkkdd7M12l_UC1i-WAHaEm?pid=ImgDet&rs=1',
      price: 1000000,
    },
    {
      id: 5,
      carName: ' Mercedes-Benz G-Class AMG G 63 Brabus',
      year: '2019',
      color: 'Hash Black',
      // tslint:disable-next-line:max-line-length
      image: 'https://th.bing.com/th/id/R481ac049cbeb179026563879db0b9e6d?rik=OsCkbbbkneeR5w&riu=http%3a%2f%2fwww.marinoperformancemotors.com%2fimagetag%2f13167%2f9%2fl%2fUsed-2019-Mercedes-Benz-G-Class-AMG-G-63-Brabus.jpg&ehk=%2beps1aRVemdmvEGMu4v%2b53CaPWs0ASl8oT8HcOFsqyw%3d&risl=&pid=ImgRaw',
      price: 1400000,
    },
    {
      id: 6,
      carName: 'Mercedes-AMG GLC 63 S Coupe',
      year: '2020',
      color: 'Ash Silver ',
      image: 'https://gtspirit.com/wp-content/uploads/2019/08/Manhart-700hp-Mercedes-AMG-GLC-63-S-Coupe.jpg',
      price: 1200000,
    },
  ];


  constructor(private carService: CarLotServiceService) { }

  ngOnInit() {
  }

  carSold() {
    console.log('car is already sold');
  }

  // tslint:disable-next-line:member-ordering
  car1: string[] = [];


  getInfoFromService1() {
    this.car1 = this.carService.getInfo1();
  }


}
