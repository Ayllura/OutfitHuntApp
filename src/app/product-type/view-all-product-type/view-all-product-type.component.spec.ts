import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProductTypeComponent } from './view-all-product-type.component';

describe('ViewAllProductTypeComponent', () => {
  let component: ViewAllProductTypeComponent;
  let fixture: ComponentFixture<ViewAllProductTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllProductTypeComponent]
    });
    fixture = TestBed.createComponent(ViewAllProductTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
