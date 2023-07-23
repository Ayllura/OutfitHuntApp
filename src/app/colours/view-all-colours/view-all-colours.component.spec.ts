import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllColoursComponent } from './view-all-colours.component';

describe('ViewAllColoursComponent', () => {
  let component: ViewAllColoursComponent;
  let fixture: ComponentFixture<ViewAllColoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllColoursComponent]
    });
    fixture = TestBed.createComponent(ViewAllColoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
