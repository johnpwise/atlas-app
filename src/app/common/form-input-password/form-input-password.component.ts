import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form-input-password',
  templateUrl: './form-input-password.component.html',
  styleUrls: ['./form-input-password.component.sass']
})
export class FormInputPasswordComponent implements OnInit {
  @Input() label: string | undefined;
  @Input() inputType: string | undefined;
  @Output() outputValueEvent: EventEmitter<string> = new EventEmitter<string>();

  public inputValue: string | undefined;
  public inputError: boolean = true;

  constructor() { }

  public ngOnInit(): void {
  }

  public valChanged(event: any): void {
    if (!this.inputError){
      this.outputValueEvent.emit(this.inputValue);
    }
  }
}
