import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PricingDisplayComponent} from './pricing-display.component';

describe('PricingDisplayComponent', () => {
  let component: PricingDisplayComponent;
  let fixture: ComponentFixture<PricingDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingDisplayComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(PricingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
