import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOrderListHeadComponent } from './job-order-list-head.component';

describe('JobOrderListHeadComponent', () => {
  let component: JobOrderListHeadComponent;
  let fixture: ComponentFixture<JobOrderListHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOrderListHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOrderListHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
