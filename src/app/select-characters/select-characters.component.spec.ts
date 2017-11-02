import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCharactersComponent } from './select-characters.component';

describe('SelectCharactersComponent', () => {
  let component: SelectCharactersComponent;
  let fixture: ComponentFixture<SelectCharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
