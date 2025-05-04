import {computed} from '@angular/core';
import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';

import {FeatureFlagDto} from '../../dtos/feature-flags/FeatureFlag.dto';
import {FeatureFlagEnum} from '../../enums/FeatureFlag.enum';

export type FeatureFlagsState = {
  featureFlags: FeatureFlagDto[];
  isLoading: boolean;
};

const initialState: FeatureFlagsState = {
  featureFlags: [],
  isLoading: false,
};

export const FeatureFlagsStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods((store) => {
      return {
        onFeatureFlagsInit: () => {
          patchState(store, {isLoading: true});
        },
        onFeatureFlagsLoaded: (featureFlags: FeatureFlagDto[]) => {
          patchState(store, {
            featureFlags: [...featureFlags],
            isLoading: false,
          });
        },
        onDisabledFeatureAccessAttempt: (featureFlag: FeatureFlagEnum) => {
          console.error(`Feature with flag: [${featureFlag}] is disabled. Please contact your administrator to enable this feature. { featureFlag: ${JSON.stringify(featureFlag)} }`);
        },
      };
    }),
    withComputed((store) => {
      return {
        isSignInWithGoogleEnabled: computed(
            () =>
              store
                  .featureFlags()
                  .find(
                      (featureFlag) =>
                        featureFlag.featureName === FeatureFlagEnum.SIGN_IN_WITH_GOOGLE,
                  )?.isActive,
        ),
        isSignInWithGitHubEnabled: computed(
            () =>
              store
                  .featureFlags()
                  .find(
                      (featureFlag) =>
                        featureFlag.featureName === FeatureFlagEnum.SIGN_IN_WITH_GITHUB,
                  )?.isActive,
        ),
        isDevelopmentMessageEnabled: computed(
            () =>
              store
                  .featureFlags()
                  .find(
                      (featureFlag) =>
                        featureFlag.featureName === FeatureFlagEnum.DEVELOPMENT_MESSAGE,
                  )?.isActive,
        ),
      };
    }),
);
