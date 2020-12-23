import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.sass']
})
export class FormInputComponent implements OnInit {

  @Input() label: string = '';
  @Input() inputType: string = '';

  constructor() { }

  public ngOnInit(): void {
    if (this.label.toLowerCase() === 'password') {
      console.log('password');
    }
  }
}
