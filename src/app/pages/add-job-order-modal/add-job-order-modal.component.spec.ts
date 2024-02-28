import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobOrderModalComponent } from './add-job-order-modal.component';

describe('AddJobOrderModalComponent', () => {
  let component: AddJobOrderModalComponent;
  let fixture: ComponentFixture<AddJobOrderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJobOrderModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobOrderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
