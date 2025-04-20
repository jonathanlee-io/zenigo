import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectFeaturesSwitchesComponent} from './project-features-switches.component';

describe('ProjectFeaturesSwitchesComponent', () => {
  let component: ProjectFeaturesSwitchesComponent;
  let fixture: ComponentFixture<ProjectFeaturesSwitchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectFeaturesSwitchesComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(ProjectFeaturesSwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
