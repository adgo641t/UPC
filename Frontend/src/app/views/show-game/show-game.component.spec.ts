import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGameComponent } from './show-game.component';

describe('ShowGameComponent', () => {
  let component: ShowGameComponent;
  let fixture: ComponentFixture<ShowGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
