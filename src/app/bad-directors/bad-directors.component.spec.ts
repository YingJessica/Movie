import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadDirectorsComponent } from './bad-directors.component';

describe('BadDirectorsComponent', () => {
  let component: BadDirectorsComponent;
  let fixture: ComponentFixture<BadDirectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadDirectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadDirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
