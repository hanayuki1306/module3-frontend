import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingLearnComponent } from './data-binding-learn.component';

describe('DataBindingLearnComponent', () => {
  let component: DataBindingLearnComponent;
  let fixture: ComponentFixture<DataBindingLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
