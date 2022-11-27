import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesAttrBlockComponent } from './cities-attr-block.component';

describe('CitiesAttrBlockComponent', () => {
  let component: CitiesAttrBlockComponent;
  let fixture: ComponentFixture<CitiesAttrBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesAttrBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesAttrBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
