import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductTypeComponent } from './view-product-type.component';

describe('ViewProductTypeComponent', () => {
  let component: ViewProductTypeComponent;
  let fixture: ComponentFixture<ViewProductTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProductTypeComponent]
    });
    fixture = TestBed.createComponent(ViewProductTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
