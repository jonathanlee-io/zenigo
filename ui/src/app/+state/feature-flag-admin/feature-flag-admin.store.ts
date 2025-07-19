import {inject} from '@angular/core';
import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {take, tap} from 'rxjs';

import {CreateFeatureFlagProjectResponseDto} from '../../dtos/feature-flags/CreateFeatureFlagProjectResponse.dto';
import {FeatureFlagsService} from '../../services/feature-flags/feature-flags.service';

export type FeatureFlagAdminState = {
  isLoading: boolean;
  currentFeatureFlagProject: CreateFeatureFlagProjectResponseDto | null;
};

const initialState: FeatureFlagAdminState = {
  isLoading: false,
  currentFeatureFlagProject: null,
};

export const FeatureFlagAdminStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods((store) => {
      const featureFlagsService = inject(FeatureFlagsService);
      return {
        createFeatureFlagProject: ({projectName, clientId}: {projectName: string, clientId: string}) => {
          patchState(store, {isLoading: true});
          featureFlagsService.createFeatureFlagProject({projectName, clientId}).pipe(
              take(1),
              tap((response) => {
                patchState(store, {isLoading: false, currentFeatureFlagProject: {...response}});
              }),
          ).subscribe();
        },
      };
    }),

);
