import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGenderAgeComponent } from './delete-gender-age.component';

describe('DeleteGenderAgeComponent', () => {
  let component: DeleteGenderAgeComponent;
  let fixture: ComponentFixture<DeleteGenderAgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteGenderAgeComponent]
    });
    fixture = TestBed.createComponent(DeleteGenderAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
