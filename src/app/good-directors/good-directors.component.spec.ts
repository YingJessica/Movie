import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodDirectorsComponent } from './good-directors.component';

describe('GoodDirectorsComponent', () => {
  let component: GoodDirectorsComponent;
  let fixture: ComponentFixture<GoodDirectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodDirectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodDirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
