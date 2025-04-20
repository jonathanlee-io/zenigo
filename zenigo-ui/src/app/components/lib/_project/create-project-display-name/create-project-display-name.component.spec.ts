import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateProjectDisplayNameComponent} from './create-project-display-name.component';

describe('CreateProjectDisplayNameComponent', () => {
  let component: CreateProjectDisplayNameComponent;
  let fixture: ComponentFixture<CreateProjectDisplayNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProjectDisplayNameComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(CreateProjectDisplayNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
