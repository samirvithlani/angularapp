import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateGovComponent } from './state-gov.component';

describe('StateGovComponent', () => {
  let component: StateGovComponent;
  let fixture: ComponentFixture<StateGovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateGovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateGovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
