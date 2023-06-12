import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgRateByTypeComponent } from './avg-rate-by-type.component';

describe('AvgRateByTypeComponent', () => {
  let component: AvgRateByTypeComponent;
  let fixture: ComponentFixture<AvgRateByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgRateByTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvgRateByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
