import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputComponent } from './form-input.component';
import {By} from "@angular/platform-browser";

describe('FormInputComponent', () => {
  let component: FormInputComponent;
  let fixture: ComponentFixture<FormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputComponent);
    component = fixture.componentInstance;
    component.inputError = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be of type text', () => {
    // Arrange
    let element = fixture.debugElement.query(By.css('input')).nativeElement;

    // Assert
    expect(element.type).toBe('text');
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
