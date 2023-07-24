import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllSizesComponent } from './view-all-sizes.component';

describe('ViewAllSizesComponent', () => {
  let component: ViewAllSizesComponent;
  let fixture: ComponentFixture<ViewAllSizesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllSizesComponent]
    });
    fixture = TestBed.createComponent(ViewAllSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
