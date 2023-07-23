import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGenderAgeComponent } from './view-gender-age.component';

describe('ViewGenderAgeComponent', () => {
  let component: ViewGenderAgeComponent;
  let fixture: ComponentFixture<ViewGenderAgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewGenderAgeComponent]
    });
    fixture = TestBed.createComponent(ViewGenderAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
