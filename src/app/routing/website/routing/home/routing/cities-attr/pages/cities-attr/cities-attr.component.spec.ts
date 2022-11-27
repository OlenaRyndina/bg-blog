import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesAttrComponent } from './cities-attr.component';

describe('CitiesAttrComponent', () => {
  let component: CitiesAttrComponent;
  let fixture: ComponentFixture<CitiesAttrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesAttrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesAttrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
