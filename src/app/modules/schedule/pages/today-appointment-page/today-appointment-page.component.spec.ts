import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayAppointmentPageComponent } from './today-appointment-page.component';

describe('TodayAppointmentPageComponent', () => {
  let component: TodayAppointmentPageComponent;
  let fixture: ComponentFixture<TodayAppointmentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodayAppointmentPageComponent]
    });
    fixture = TestBed.createComponent(TodayAppointmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
