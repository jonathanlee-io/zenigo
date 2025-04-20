import {NgClass, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import {ChevronDownIcon} from 'primeng/icons';
import {InputGroupModule} from 'primeng/inputgroup';
import {InputTextModule} from 'primeng/inputtext';
import {PopoverModule} from 'primeng/popover';
import {StyleClassModule} from 'primeng/styleclass';
import {ToggleSwitchModule} from 'primeng/toggleswitch';

import {UserAuthenticationStore} from '../../../../+state/auth/user-auth.store';
import {UserPreferencesStore} from '../../../../+state/user-preferences/user-preferences.store';
import {RoutePath} from '../../../../app.routes';
import {rebaseRoutePath} from '../../../../util/router/Router.utils';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    RouterLink,
    ToggleSwitchModule,
    FormsModule,
    ButtonModule,
    StyleClassModule,
    PopoverModule,
    InputGroupModule,
    InputTextModule,
    DividerModule,
    ChevronDownIcon,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  protected readonly userAuthenticationStore = inject(UserAuthenticationStore);
  protected readonly userPreferencesStore = inject(UserPreferencesStore);
  isDarkMode: boolean = this.userPreferencesStore.isDarkMode();
  protected readonly rebaseRoutePath = rebaseRoutePath;
  protected readonly RoutePath = RoutePath;

  getColorModePrompt() {
    return `Enable ${(this.isDarkMode) ? 'light' : 'dark'} mode to get a ${(this.isDarkMode) ? 'lighter' : 'darker'} experience.`;
  }

  getOppositeOfCurrentDarkModeStatus() {
    return this.isDarkMode ? 'Dark' : 'Light';
  }
}
