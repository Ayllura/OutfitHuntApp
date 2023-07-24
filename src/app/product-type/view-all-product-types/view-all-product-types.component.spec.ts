import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProductTypesComponent } from './view-all-product-types.component';

describe('ViewAllProductTypesComponent', () => {
  let component: ViewAllProductTypesComponent;
  let fixture: ComponentFixture<ViewAllProductTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllProductTypesComponent]
    });
    fixture = TestBed.createComponent(ViewAllProductTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
