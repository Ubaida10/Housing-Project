import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { NgForOf } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, NgForOf],
  templateUrl:'./home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];

  housingService: HousingService = inject (HousingService);

  filteredLocationList:HousingLocation[] = []
  constructor(){
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[])=>{
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text:string){
    if(!text){
      this.filteredLocationList = this.housingLocationList;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation)=>{
      return housingLocation?.city.toLowerCase().includes(text.toLowerCase());
    })
  }
}
