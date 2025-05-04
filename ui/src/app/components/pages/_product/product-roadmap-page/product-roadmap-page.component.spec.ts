import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductRoadmapPageComponent} from './product-roadmap-page.component';

describe('ProductRoadmapPageComponent', () => {
  let component: ProductRoadmapPageComponent;
  let fixture: ComponentFixture<ProductRoadmapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRoadmapPageComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(ProductRoadmapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
