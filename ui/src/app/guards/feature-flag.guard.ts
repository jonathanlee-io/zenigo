import {inject} from '@angular/core';
import {CanActivateFn} from '@angular/router';

import {FeatureFlagsStore} from '../+state/feature-flags/feature-flags.store';
import {FeatureFlagEnum} from '../enums/FeatureFlag.enum';

export const featureFlagGuard: CanActivateFn = (route) => {
  const featureFlagsStore = inject(FeatureFlagsStore);
  const featureFlagEnum = route.data['feature'] as FeatureFlagEnum;
  const feature = featureFlagsStore.featureFlags()
      .find((featureFlag) => featureFlag.featureName === featureFlagEnum);
  if (!feature?.isActive) {
    featureFlagsStore.onDisabledFeatureAccessAttempt(featureFlagEnum);
    return false;
  }
  return true;
};
