import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMaterialComponent } from './update-material.component';

describe('UpdateMaterialComponent', () => {
  let component: UpdateMaterialComponent;
  let fixture: ComponentFixture<UpdateMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMaterialComponent]
    });
    fixture = TestBed.createComponent(UpdateMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
