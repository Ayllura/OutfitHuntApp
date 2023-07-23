import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllGenderAgesComponent } from './view-all-gender-ages.component';

describe('ViewAllGenderAgesComponent', () => {
  let component: ViewAllGenderAgesComponent;
  let fixture: ComponentFixture<ViewAllGenderAgesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllGenderAgesComponent]
    });
    fixture = TestBed.createComponent(ViewAllGenderAgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
