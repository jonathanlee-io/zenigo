import {NgClass} from '@angular/common';
import {Component, input, WritableSignal} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar-link',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './sidebar-link.component.html',
  styleUrl: './sidebar-link.component.scss',
})
export class SidebarLinkComponent {
  routerLink = input.required<string>();
  activeTabIndex = input.required<WritableSignal<number>>();
  svgPathD = input.required<string>();
  isActiveIndex = input.required<number>();
  title = input.required<string>();
}
