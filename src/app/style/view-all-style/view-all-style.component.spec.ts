import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllStyleComponent } from './view-all-style.component';

describe('ViewAllStyleComponent', () => {
  let component: ViewAllStyleComponent;
  let fixture: ComponentFixture<ViewAllStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllStyleComponent]
    });
    fixture = TestBed.createComponent(ViewAllStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
