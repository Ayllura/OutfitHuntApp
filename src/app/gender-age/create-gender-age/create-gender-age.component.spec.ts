import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGenderAgeComponent } from './create-gender-age.component';

describe('CreateGenderAgeComponent', () => {
  let component: CreateGenderAgeComponent;
  let fixture: ComponentFixture<CreateGenderAgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateGenderAgeComponent]
    });
    fixture = TestBed.createComponent(CreateGenderAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
