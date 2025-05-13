import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserSegmentsTableComponent} from './user-segments-table.component';

describe('UserSegmentsTableComponent', () => {
  let component: UserSegmentsTableComponent;
  let fixture: ComponentFixture<UserSegmentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSegmentsTableComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(UserSegmentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
