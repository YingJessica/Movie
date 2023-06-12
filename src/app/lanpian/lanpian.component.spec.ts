import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanpianComponent } from './lanpian.component';

describe('LanpianComponent', () => {
  let component: LanpianComponent;
  let fixture: ComponentFixture<LanpianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanpianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanpianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
