import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesAttrFormComponent } from './cities-attr-form.component';

describe('CitiesAttrFormComponent', () => {
  let component: CitiesAttrFormComponent;
  let fixture: ComponentFixture<CitiesAttrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesAttrFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesAttrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
