import { 
    Component,  
    Input,
    Output,
    EventEmitter
     } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';

import { CitiesAttr } from '../../../../store/cities-attr-store/store/cities-attr.reducer';

@Component({
  selector: 'app-cities-attr-form',
  templateUrl: './cities-attr-form.component.html',
  styleUrls: ['./cities-attr-form.component.scss']
})
export class CitiesAttrFormComponent {
    @Input() editCityAttractions: CitiesAttr;
    @Output() editCurrentAttr = new EventEmitter<CitiesAttr>();

    currentCityAttr: CitiesAttr;

    onSubmit(form: NgForm) {
    
        let editAttr: CitiesAttr = {...this.editCityAttractions};
        editAttr.cityName = form.value.cityName;
        editAttr.cityAttractions = form.value.cityAttractions;
        editAttr.nameCityAttractions = form.value.nameCityAttractions;
        editAttr.adress = form.value.adress;
        editAttr.phone = form.value.phone;
        editAttr.site = form.value.site;
        editAttr.workHours = form.value.workHours;
        editAttr.ticketPrice = form.value.ticketPrice;

        this.editCurrentAttr.emit(editAttr);
    }
}

