import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FeedbackExportDialogComponent} from './feedback-export-dialog.component';

describe('FeedbackExportDialogComponent', () => {
  let component: FeedbackExportDialogComponent;
  let fixture: ComponentFixture<FeedbackExportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackExportDialogComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(FeedbackExportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
