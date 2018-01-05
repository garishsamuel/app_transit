import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelsDeliveredComponent } from './parcels-delivered.component';

describe('ParcelsDeliveredComponent', () => {
  let component: ParcelsDeliveredComponent;
  let fixture: ComponentFixture<ParcelsDeliveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcelsDeliveredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelsDeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
