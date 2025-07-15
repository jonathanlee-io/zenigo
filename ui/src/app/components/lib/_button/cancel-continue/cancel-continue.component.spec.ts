import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CancelContinueComponent} from './cancel-continue.component';

describe('CancelContinueComponent', () => {
  let component: CancelContinueComponent;
  let fixture: ComponentFixture<CancelContinueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelContinueComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(CancelContinueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
