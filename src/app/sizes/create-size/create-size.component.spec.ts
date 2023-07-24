import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSizeComponent } from './create-size.component';

describe('CreateSizeComponent', () => {
  let component: CreateSizeComponent;
  let fixture: ComponentFixture<CreateSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSizeComponent]
    });
    fixture = TestBed.createComponent(CreateSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
