import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureTravelsComponent } from './future-travels.component';

describe('FutureTravelsComponent', () => {
  let component: FutureTravelsComponent;
  let fixture: ComponentFixture<FutureTravelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureTravelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
