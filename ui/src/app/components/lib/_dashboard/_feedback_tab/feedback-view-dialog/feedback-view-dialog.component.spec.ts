import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackViewDialogComponent } from './feedback-view-dialog.component';

describe('FeedbackViewDialogComponent', () => {
  let component: FeedbackViewDialogComponent;
  let fixture: ComponentFixture<FeedbackViewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackViewDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
