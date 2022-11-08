import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegistrationBlockComponent } from './admin-registration-block.component';

describe('AdminRegistrationBlockComponent', () => {
  let component: AdminRegistrationBlockComponent;
  let fixture: ComponentFixture<AdminRegistrationBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRegistrationBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegistrationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
