import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FeatureFlagsTableComponent} from './feature-flags-table.component';

describe('FeatureFlagsTableComponent', () => {
  let component: FeatureFlagsTableComponent;
  let fixture: ComponentFixture<FeatureFlagsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureFlagsTableComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(FeatureFlagsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
