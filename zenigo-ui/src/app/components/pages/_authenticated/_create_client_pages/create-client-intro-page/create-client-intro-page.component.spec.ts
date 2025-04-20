import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateClientIntroPageComponent} from './create-client-intro-page.component';

describe('CreateClientIntroPageComponent', () => {
  let component: CreateClientIntroPageComponent;
  let fixture: ComponentFixture<CreateClientIntroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateClientIntroPageComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(CreateClientIntroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
