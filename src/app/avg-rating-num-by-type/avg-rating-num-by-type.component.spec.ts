import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgRatingNumByTypeComponent } from './avg-rating-num-by-type.component';

describe('AvgRatingNumByTypeComponent', () => {
  let component: AvgRatingNumByTypeComponent;
  let fixture: ComponentFixture<AvgRatingNumByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgRatingNumByTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvgRatingNumByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
