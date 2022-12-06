import { 
    Component, 
    OnInit, 
    OnChanges, 
    SimpleChanges,
    Input,
    Output,
    ViewChild,
    EventEmitter,
    Renderer2,
    ElementRef
     } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';

import { CitiesAttr } from '../../../../store/cities-attr-store/store/cities-attr.reducer';
import { CityAttractions } from '../../../../store/cities-attr-store/models/CityAttractions.model';


@Component({
  selector: 'app-cities-attr-form',
  templateUrl: './cities-attr-form.component.html',
  styleUrls: ['./cities-attr-form.component.scss']
})
export class CitiesAttrFormComponent implements OnInit, OnChanges{
    @Input() editCityAttractions: CitiesAttr;
    @Output() editCurrentAttr = new EventEmitter<CitiesAttr>();
    @Output() addCurrentAttr = new EventEmitter<CitiesAttr>()

    @Input() formIsOpen: boolean;
    @Output() closeFormAttr = new EventEmitter<any>();

    @Input() formCoord: number;

    @ViewChild('formContainer') form: ElementRef<HTMLInputElement>;

    constructor(private renderer: Renderer2) {}

    ngOnInit() {
        if (!this.editCityAttractions) {
            let newCityAttr = new CityAttractions();

            this.editCityAttractions = newCityAttr;
        } 
    }

    ngOnChanges(changes: SimpleChanges){
        this.renderer.setStyle(this.form.nativeElement, 'top', `${this.formCoord + window.pageYOffset - 100}px`);
    }

    onSubmit(form: NgForm) {
    
        let curCityAttr: CitiesAttr = {...this.editCityAttractions};
        curCityAttr.cityName = form.value.cityName;
        curCityAttr.cityAttractions = form.value.cityAttractions;
        curCityAttr.nameCityAttractions = form.value.nameCityAttractions;
        curCityAttr.adress = form.value.adress;
        curCityAttr.phone = form.value.phone;
        curCityAttr.site = form.value.site;
        curCityAttr.workHours = form.value.workHours;
        curCityAttr.ticketPrice = form.value.ticketPrice;

        if (curCityAttr.id) {
            this.editCurrentAttr.emit(curCityAttr);
        } else { 
            this.addCurrentAttr.emit(curCityAttr);
        }
        this.editCityAttractions = new CityAttractions();
        this.closeFormAttr.emit();
    }

    cancel() {
        this.editCityAttractions = new CityAttractions();
        this.closeFormAttr.emit();
    }
}

