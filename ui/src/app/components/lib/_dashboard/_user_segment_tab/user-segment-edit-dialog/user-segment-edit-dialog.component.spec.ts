import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserSegmentEditDialogComponent} from './user-segment-edit-dialog.component';

describe('UserSegmentEditDialogComponent', () => {
  let component: UserSegmentEditDialogComponent;
  let fixture: ComponentFixture<UserSegmentEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSegmentEditDialogComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(UserSegmentEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
