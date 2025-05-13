import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureFlagsTabComponent } from './feature-flags-tab.component';

describe('FeatureFlagsTabComponent', () => {
  let component: FeatureFlagsTabComponent;
  let fixture: ComponentFixture<FeatureFlagsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureFlagsTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureFlagsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
