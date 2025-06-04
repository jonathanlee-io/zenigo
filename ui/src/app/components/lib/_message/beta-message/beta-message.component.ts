
import {Component, inject, OnInit, signal} from '@angular/core';
import {Message} from 'primeng/message';

import {FeatureFlagsStore} from '../../../../+state/feature-flags/feature-flags.store';

@Component({
  selector: 'app-beta-message',
  imports: [
    Message,
  ],
  templateUrl: './beta-message.component.html',
  styleUrl: './beta-message.component.scss',
})
export class BetaMessageComponent implements OnInit {
  static readonly BETA_MESSAGE_CLOSED_KEY = 'beta-message-closed';

  protected readonly featureFlagStore = inject(FeatureFlagsStore);

  protected readonly isShown = signal(true);

  ngOnInit() {
    this.isShown.set(localStorage.getItem(BetaMessageComponent.BETA_MESSAGE_CLOSED_KEY) !== 'true');
  }

  handleBetaMessageClosed() {
    localStorage.setItem(BetaMessageComponent.BETA_MESSAGE_CLOSED_KEY, 'true');
    this.isShown.set(false);
  }
}
