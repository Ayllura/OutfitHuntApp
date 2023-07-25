import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMaterialComponent } from './delete-material.component';

describe('DeleteMaterialComponent', () => {
  let component: DeleteMaterialComponent;
  let fixture: ComponentFixture<DeleteMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteMaterialComponent]
    });
    fixture = TestBed.createComponent(DeleteMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
