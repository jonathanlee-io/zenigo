import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductFeedbackDashboardPanelComponent} from './product-feedback-dashboard-panel.component';

describe('ProductFeedbackDashboardPanelComponent', () => {
  let component: ProductFeedbackDashboardPanelComponent;
  let fixture: ComponentFixture<ProductFeedbackDashboardPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFeedbackDashboardPanelComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(ProductFeedbackDashboardPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
