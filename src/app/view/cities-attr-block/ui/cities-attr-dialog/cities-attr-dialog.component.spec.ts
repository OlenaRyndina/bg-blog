import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesAttrDialogComponent } from './cities-attr-dialog.component';

describe('CitiesAttrDialogComponent', () => {
  let component: CitiesAttrDialogComponent;
  let fixture: ComponentFixture<CitiesAttrDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesAttrDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesAttrDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
