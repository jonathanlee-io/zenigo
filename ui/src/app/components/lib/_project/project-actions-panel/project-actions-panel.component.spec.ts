import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectActionsPanelComponent} from './project-actions-panel.component';

describe('ProjectActionsPanelComponent', () => {
  let component: ProjectActionsPanelComponent;
  let fixture: ComponentFixture<ProjectActionsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectActionsPanelComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(ProjectActionsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
