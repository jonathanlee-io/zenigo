import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserSegmentsTabComponent} from './user-segments-tab.component';

describe('UserSegmentsTabComponent', () => {
  let component: UserSegmentsTabComponent;
  let fixture: ComponentFixture<UserSegmentsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSegmentsTabComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(UserSegmentsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
