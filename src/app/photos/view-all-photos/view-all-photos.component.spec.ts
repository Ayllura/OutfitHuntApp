import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPhotosComponent } from './view-all-photos.component';

describe('ViewAllPhotosComponent', () => {
  let component: ViewAllPhotosComponent;
  let fixture: ComponentFixture<ViewAllPhotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllPhotosComponent]
    });
    fixture = TestBed.createComponent(ViewAllPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
