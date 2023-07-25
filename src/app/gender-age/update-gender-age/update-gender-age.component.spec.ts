import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGenderAgeComponent } from './update-gender-age.component';

describe('UpdateGenderAgeComponent', () => {
  let component: UpdateGenderAgeComponent;
  let fixture: ComponentFixture<UpdateGenderAgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateGenderAgeComponent]
    });
    fixture = TestBed.createComponent(UpdateGenderAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
