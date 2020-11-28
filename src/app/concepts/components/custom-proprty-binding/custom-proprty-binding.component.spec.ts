import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProprtyBindingComponent } from './custom-proprty-binding.component';

describe('CustomProprtyBindingComponent', () => {
  let component: CustomProprtyBindingComponent;
  let fixture: ComponentFixture<CustomProprtyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomProprtyBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProprtyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
