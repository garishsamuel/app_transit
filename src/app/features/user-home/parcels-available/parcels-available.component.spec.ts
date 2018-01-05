import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelsAvailableComponent } from './parcels-available.component';

describe('ParcelsAvailableComponent', () => {
  let component: ParcelsAvailableComponent;
  let fixture: ComponentFixture<ParcelsAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcelsAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelsAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
