import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesAttrFilterComponent } from './cities-attr-filter.component';

describe('CitiesAttrFilterComponent', () => {
  let component: CitiesAttrFilterComponent;
  let fixture: ComponentFixture<CitiesAttrFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesAttrFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesAttrFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
