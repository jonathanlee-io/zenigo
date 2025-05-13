import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FeatureFlagEditDialogComponent} from './feature-flag-edit-dialog.component';

describe('FeatureFlagEditDialogComponent', () => {
  let component: FeatureFlagEditDialogComponent;
  let fixture: ComponentFixture<FeatureFlagEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureFlagEditDialogComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(FeatureFlagEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
