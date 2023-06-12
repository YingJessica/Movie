import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgRatingNumByAvgRatesComponent } from './avg-rating-num-by-avg-rates.component';

describe('AvgRatingNumByAvgRatesComponent', () => {
  let component: AvgRatingNumByAvgRatesComponent;
  let fixture: ComponentFixture<AvgRatingNumByAvgRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgRatingNumByAvgRatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvgRatingNumByAvgRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
