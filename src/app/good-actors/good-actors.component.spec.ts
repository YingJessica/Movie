import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodActorsComponent } from './good-actors.component';

describe('GoodActorsComponent', () => {
  let component: GoodActorsComponent;
  let fixture: ComponentFixture<GoodActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodActorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
