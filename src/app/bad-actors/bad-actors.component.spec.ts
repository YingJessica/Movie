import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadActorsComponent } from './bad-actors.component';

describe('BadActorsComponent', () => {
  let component: BadActorsComponent;
  let fixture: ComponentFixture<BadActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadActorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
