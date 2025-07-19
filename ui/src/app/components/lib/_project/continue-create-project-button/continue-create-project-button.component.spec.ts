import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ContinueCreateProjectButtonComponent} from './continue-create-project-button.component';

describe('ContinueCreateProjectButtonComponent', () => {
  let component: ContinueCreateProjectButtonComponent;
  let fixture: ComponentFixture<ContinueCreateProjectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinueCreateProjectButtonComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(ContinueCreateProjectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
