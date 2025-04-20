import {NgClass, NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {Component, input} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {ProgressSpinner} from 'primeng/progressspinner';

import {
  SubdomainState,
} from '../../../pages/_authenticated/_create_client_pages/create-project-page/create-project-page.component';

@Component({
  selector: 'app-create-project',
  imports: [
    NgIf,
    NgSwitchCase,
    ProgressSpinner,
    ReactiveFormsModule,
    NgSwitch,
    NgClass,
  ],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss',
})
export class CreateProjectComponent {
  subdomainState = input.required<SubdomainState>();
  subdomainFormControl = input.required<FormControl<string>>();
}
