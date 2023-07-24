import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStyleComponent } from './view-style.component';

describe('ViewStyleComponent', () => {
  let component: ViewStyleComponent;
  let fixture: ComponentFixture<ViewStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewStyleComponent]
    });
    fixture = TestBed.createComponent(ViewStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
