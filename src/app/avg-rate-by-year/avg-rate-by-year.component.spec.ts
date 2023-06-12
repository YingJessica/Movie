import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgRateByYearComponent } from './avg-rate-by-year.component';

describe('AvgRateByYearComponent', () => {
  let component: AvgRateByYearComponent;
  let fixture: ComponentFixture<AvgRateByYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgRateByYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvgRateByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
