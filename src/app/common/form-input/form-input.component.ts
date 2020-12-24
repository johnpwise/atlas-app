import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.sass']
})
export class FormInputComponent implements OnInit {
  formInput: any;

  @Input() label: string = '';
  @Input() inputType: string = '';
  @Output() outputValueEvent: EventEmitter<string> = new EventEmitter<string>();
  public inputValue: string | undefined;

  constructor() { }

  public ngOnInit(): void {
  }

  public valChanged(event: any): void {
    this.outputValueEvent.emit(this.inputValue);
  }
}
