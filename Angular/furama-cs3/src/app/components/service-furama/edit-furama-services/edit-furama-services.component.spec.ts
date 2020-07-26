import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFuramaServicesComponent } from './edit-furama-services.component';

describe('EditFuramaServicesComponent', () => {
  let component: EditFuramaServicesComponent;
  let fixture: ComponentFixture<EditFuramaServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFuramaServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFuramaServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
