import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionProductionComponent } from './region-production.component';

describe('RegionProductionComponent', () => {
  let component: RegionProductionComponent;
  let fixture: ComponentFixture<RegionProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
