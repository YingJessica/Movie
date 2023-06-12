import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgRatingNumByAvgRateComponent } from './avg-rating-num-by-avg-rate.component';

describe('AvgRatingNumByAvgRateComponent', () => {
  let component: AvgRatingNumByAvgRateComponent;
  let fixture: ComponentFixture<AvgRatingNumByAvgRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgRatingNumByAvgRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvgRatingNumByAvgRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
