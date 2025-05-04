import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BetaMessageComponent} from './beta-message.component';

describe('BetaMessageComponent', () => {
  let component: BetaMessageComponent;
  let fixture: ComponentFixture<BetaMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetaMessageComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(BetaMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
