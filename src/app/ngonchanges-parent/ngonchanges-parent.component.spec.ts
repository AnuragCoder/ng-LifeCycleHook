import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgonchangesParentComponent } from './ngonchanges-parent.component';

describe('NgonchangesParentComponent', () => {
  let component: NgonchangesParentComponent;
  let fixture: ComponentFixture<NgonchangesParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgonchangesParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgonchangesParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
