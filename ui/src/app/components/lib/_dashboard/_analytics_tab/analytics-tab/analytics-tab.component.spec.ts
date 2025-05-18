import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AnalyticsTabComponent} from './analytics-tab.component';

describe('AnalyticsTabComponent', () => {
  let component: AnalyticsTabComponent;
  let fixture: ComponentFixture<AnalyticsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsTabComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(AnalyticsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
