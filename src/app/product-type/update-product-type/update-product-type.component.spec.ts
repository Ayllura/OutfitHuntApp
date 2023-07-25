import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductTypeComponent } from './update-product-type.component';

describe('UpdateProductTypeComponent', () => {
  let component: UpdateProductTypeComponent;
  let fixture: ComponentFixture<UpdateProductTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProductTypeComponent]
    });
    fixture = TestBed.createComponent(UpdateProductTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
