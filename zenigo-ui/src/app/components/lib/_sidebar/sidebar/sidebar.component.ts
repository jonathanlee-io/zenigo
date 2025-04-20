import {NgIf} from '@angular/common';
import {Component, input, signal, WritableSignal} from '@angular/core';
import {RouterLink} from '@angular/router';

import {SidebarLinkComponent} from '../sidebar-link/sidebar-link.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIf, RouterLink, SidebarLinkComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isVisible = input.required<boolean>();
  activeTabIndex: WritableSignal<number> = signal(0);
}
