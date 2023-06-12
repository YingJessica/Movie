import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountByTypeComponent } from './count-by-type.component';

describe('CountByTypeComponent', () => {
  let component: CountByTypeComponent;
  let fixture: ComponentFixture<CountByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountByTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
