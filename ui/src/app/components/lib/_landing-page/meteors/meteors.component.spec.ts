import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MeteorsComponent} from './meteors.component';

describe('MeteorsComponent', () => {
  let component: MeteorsComponent;
  let fixture: ComponentFixture<MeteorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeteorsComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(MeteorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
