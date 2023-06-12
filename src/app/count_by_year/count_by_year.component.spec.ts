import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Count_by_yearComponent } from './count_by_year.component';

describe('ProductionComponent', () => {
  let component: Count_by_yearComponent;
  let fixture: ComponentFixture<Count_by_yearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Count_by_yearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Count_by_yearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
