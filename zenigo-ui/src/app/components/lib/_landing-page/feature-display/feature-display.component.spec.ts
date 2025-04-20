import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FeatureDisplayComponent} from './feature-display.component';

describe('FeatureDisplayComponent', () => {
  let component: FeatureDisplayComponent;
  let fixture: ComponentFixture<FeatureDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureDisplayComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(FeatureDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
