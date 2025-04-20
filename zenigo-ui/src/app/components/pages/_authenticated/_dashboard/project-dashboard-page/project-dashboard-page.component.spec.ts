import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectDashboardPageComponent} from './project-dashboard-page.component';

describe('ProjectDashboardPageComponent', () => {
  let component: ProjectDashboardPageComponent;
  let fixture: ComponentFixture<ProjectDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDashboardPageComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(ProjectDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
