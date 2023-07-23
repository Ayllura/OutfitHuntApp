import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoursComponent } from './colours.component';

describe('ColoursComponent', () => {
  let component: ColoursComponent;
  let fixture: ComponentFixture<ColoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColoursComponent]
    });
    fixture = TestBed.createComponent(ColoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
