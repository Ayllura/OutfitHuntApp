import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateColourComponent } from './create-colour.component';

describe('CreateColourComponent', () => {
  let component: CreateColourComponent;
  let fixture: ComponentFixture<CreateColourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateColourComponent]
    });
    fixture = TestBed.createComponent(CreateColourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
