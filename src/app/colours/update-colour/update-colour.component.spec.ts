import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateColourComponent } from './update-colour.component';

describe('UpdateColourComponent', () => {
  let component: UpdateColourComponent;
  let fixture: ComponentFixture<UpdateColourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateColourComponent]
    });
    fixture = TestBed.createComponent(UpdateColourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
