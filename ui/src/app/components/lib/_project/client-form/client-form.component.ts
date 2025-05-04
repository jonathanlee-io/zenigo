import {NgClass, NgIf} from '@angular/common';
import {Component, input} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-client-form',
  imports: [
    NgIf,
    ReactiveFormsModule,
    NgClass,
  ],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss',
})
export class ClientFormComponent {
  clientDisplayNameFormControl = input.required<FormControl<string>>();
  isReadonly = input.required<boolean>();
}
