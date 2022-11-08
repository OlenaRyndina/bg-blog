import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegistrationFormUiComponent } from './admin-registration-form-ui.component';

describe('AdminRegistrationFormUiComponent', () => {
  let component: AdminRegistrationFormUiComponent;
  let fixture: ComponentFixture<AdminRegistrationFormUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRegistrationFormUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegistrationFormUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
