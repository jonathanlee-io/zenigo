import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OrgDashboardCreateProjectPageComponent} from './org-dashboard-create-project-page.component';

describe('OrgDashboardCreateProjectPageComponent', () => {
  let component: OrgDashboardCreateProjectPageComponent;
  let fixture: ComponentFixture<OrgDashboardCreateProjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrgDashboardCreateProjectPageComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(OrgDashboardCreateProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
