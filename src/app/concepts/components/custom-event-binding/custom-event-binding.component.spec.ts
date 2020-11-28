import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEventBindingComponent } from './custom-event-binding.component';

describe('CustomEventBindingComponent', () => {
  let component: CustomEventBindingComponent;
  let fixture: ComponentFixture<CustomEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomEventBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
