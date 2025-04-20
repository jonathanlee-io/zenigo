import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FullIssueBoardComponent} from './full-issue-board.component';

describe('FullIssueBoardComponent', () => {
  let component: FullIssueBoardComponent;
  let fixture: ComponentFixture<FullIssueBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullIssueBoardComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(FullIssueBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
