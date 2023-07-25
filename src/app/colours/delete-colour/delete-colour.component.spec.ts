import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteColourComponent } from './delete-colour.component';

describe('DeleteColourComponent', () => {
  let component: DeleteColourComponent;
  let fixture: ComponentFixture<DeleteColourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteColourComponent]
    });
    fixture = TestBed.createComponent(DeleteColourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
