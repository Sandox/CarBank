import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashItemsComponent } from './dash-items.component';

describe('DashItemsComponent', () => {
  let component: DashItemsComponent;
  let fixture: ComponentFixture<DashItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
