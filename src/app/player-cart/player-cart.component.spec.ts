import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCartComponent } from './player-cart.component';

describe('PlayerCartComponent', () => {
  let component: PlayerCartComponent;
  let fixture: ComponentFixture<PlayerCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
