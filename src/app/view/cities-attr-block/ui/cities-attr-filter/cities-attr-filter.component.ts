import { 
    Component, 
    Input,
    Output,
    EventEmitter,
    OnChanges, 
    SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';

import { CitiesAttr } from '../../../../store/cities-attr-store/store/cities-attr.reducer';
import { Message } from '../../../ui/message/message.model';

@Component({
  selector: 'app-cities-attr-filter',
  templateUrl: './cities-attr-filter.component.html',
  styleUrls: ['./cities-attr-filter.component.scss']
})
export class CitiesAttrFilterComponent implements OnChanges {
  cities = [];
  cityAttrs = [];
  city: string;
  cityAttr: string;
  rating: string;
  price: string;
  filteredCitiesAttrs: CitiesAttr[] = []; 
  
  @Input() citiesAttractions: CitiesAttr[] = [];

  @Output() filteredAttrs = new EventEmitter<CitiesAttr[]>();

  message: Message;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.citiesAttractions) {
      let citiesSet = new Set();
      let attrsSet = new Set(); 
      this.citiesAttractions.forEach((item) => citiesSet.add(item.cityName) && attrsSet.add(item.cityAttractions));
      this.cities = [...citiesSet];
      this.cityAttrs = [...attrsSet];
      this.cities.push('Всі');
      this.cityAttrs.push('Всі');
    }
  }

  onSubmit(form: NgForm) {
      this.filteredCitiesAttrs = [...this.citiesAttractions];
      let filters = form.value;

      if (filters.city && filters.city.toLowerCase() !== 'всі') {
          this.filteredCitiesAttrs = this.filteredCitiesAttrs.filter(item => item.cityName === filters.city);
      }

      if (filters.cityAttr && filters.cityAttr.toLowerCase() !== 'всі') {
          this.filteredCitiesAttrs = this.filteredCitiesAttrs.filter(item => item.cityAttractions === filters.cityAttr);
      }

      filters.rating && filters.rating === 'increase' 
          ? this.filteredCitiesAttrs = this.filteredCitiesAttrs.sort(this.compareNum)       
          : this.filteredCitiesAttrs = this.filteredCitiesAttrs.sort(this.compareNum).reverse();

      filters.price && filters.price === 'free'
          ? this.filteredCitiesAttrs = this.filteredCitiesAttrs.filter(item => +item.ticketPrice === 0)
          : filters.price && filters.price === 'lessThan'
          ? this.filteredCitiesAttrs = this.filteredCitiesAttrs.filter(item => +item.ticketPrice < 100)
          : this.filteredCitiesAttrs;
      this.filteredAttrs.emit(this.filteredCitiesAttrs);

      if (this.filteredCitiesAttrs.length === 0) {
          this.message = new Message('warning', 'Нажаль, за вашим запитом нічого не знайдено');
      }
  }

  private compareNum(a, b) {
          return +a.like - +b.like;
  }

}
