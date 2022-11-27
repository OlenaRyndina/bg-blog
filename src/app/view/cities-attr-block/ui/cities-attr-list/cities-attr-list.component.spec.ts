import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesAttrListComponent } from './cities-attr-list.component';

describe('CitiesAttrListComponent', () => {
  let component: CitiesAttrListComponent;
  let fixture: ComponentFixture<CitiesAttrListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesAttrListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesAttrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
