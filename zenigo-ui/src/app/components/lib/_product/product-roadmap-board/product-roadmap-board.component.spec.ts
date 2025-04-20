import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductRoadmapBoardComponent} from './product-roadmap-board.component';

describe('ProductRoadmapBoardComponent', () => {
  let component: ProductRoadmapBoardComponent;
  let fixture: ComponentFixture<ProductRoadmapBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRoadmapBoardComponent],
    })
        .compileComponents();

    fixture = TestBed.createComponent(ProductRoadmapBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
