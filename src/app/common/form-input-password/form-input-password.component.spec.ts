import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputPasswordComponent } from './form-input-password.component';
import {By} from "@angular/platform-browser";

describe('FormInputPasswordComponent', () => {
  let component: FormInputPasswordComponent;
  let fixture: ComponentFixture<FormInputPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputPasswordComponent);
    component = fixture.componentInstance;
    component.inputError = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be of type password', () => {
    // Arrange
    let element = fixture.debugElement.query(By.css('input')).nativeElement;

    // Assert
    expect(element.type).toBe('password');
  })

  it('should emit event when the text input value changes', () => {

    // Arrange
    component.inputValue = 'a';
    spyOn(component.outputValueEvent, 'emit')

    // Act
    component.valChanged('');

    // Assert
    expect(component.outputValueEvent.emit).toHaveBeenCalled();
    expect(component.outputValueEvent.emit).toHaveBeenCalledWith('a');
  });
});
