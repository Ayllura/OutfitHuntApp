import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderAgeComponent } from './gender-age.component';

describe('GenderAgeComponent', () => {
  let component: GenderAgeComponent;
  let fixture: ComponentFixture<GenderAgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenderAgeComponent]
    });
    fixture = TestBed.createComponent(GenderAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
