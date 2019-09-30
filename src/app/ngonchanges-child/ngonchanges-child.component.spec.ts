import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgonchangesChildComponent } from './ngonchanges-child.component';

describe('NgonchangesChildComponent', () => {
  let component: NgonchangesChildComponent;
  let fixture: ComponentFixture<NgonchangesChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgonchangesChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgonchangesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
