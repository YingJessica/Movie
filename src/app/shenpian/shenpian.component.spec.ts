import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShenpianComponent } from './shenpian.component';

describe('ShenpianComponent', () => {
  let component: ShenpianComponent;
  let fixture: ComponentFixture<ShenpianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShenpianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShenpianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
