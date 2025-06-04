import { NgClass } from '@angular/common';
import {Component, input} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-project-display-name',
  imports: [
    ReactiveFormsModule,
    NgClass
],
  templateUrl: './create-project-display-name.component.html',
  styleUrl: './create-project-display-name.component.scss',
})
export class CreateProjectDisplayNameComponent {
  projectDisplayNameFormControl = input.required<FormControl<string>>();
  isReadonly = input.required<boolean>();
}
