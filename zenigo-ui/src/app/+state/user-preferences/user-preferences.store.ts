import {inject} from '@angular/core';
import {patchState, signalStore, withHooks, withMethods, withState} from '@ngrx/signals';

export type UserPreferencesState = {
  isLoading: boolean;
  isDarkMode: boolean;
  isSidebarOpen: boolean;
};

const initialState: UserPreferencesState = {
  isLoading: false,
  isDarkMode: false,
  isSidebarOpen: true,
};

const darkModeKey = 'darkMode';

export const UserPreferencesStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods((store) => {
      const document = inject(Document);
      return {
        setIsSidebarOpen: (isSidebarOpen: boolean) => {
          patchState(store, {isSidebarOpen});
        },
        setDarkModeEnabled: () => {
          const rootElement = document.getElementById('root')! as unknown as HTMLElement;
          rootElement.classList.add('dark');
          localStorage.setItem(
              darkModeKey,
              JSON.stringify(true));
          patchState(store, {isDarkMode: true});
        },
        setLightModeEnabled: () => {
          const rootElement = document.getElementById('root')! as unknown as HTMLElement;
          rootElement.classList.remove('dark');
          localStorage.setItem(
              darkModeKey,
              JSON.stringify(false));
          patchState(store, {isDarkMode: false});
        },
      };
    }),
    withMethods((store) => {
      return {
        toggleDarkMode: () => {
          if (store.isDarkMode()) {
            store.setLightModeEnabled();
          } else {
            store.setDarkModeEnabled();
          }
        },
      };
    }),
    withHooks({
      onInit: (store) => {
        const darkModeLocalStorage = localStorage.getItem(darkModeKey);
        if (darkModeLocalStorage === null && window?.matchMedia('(prefers-color-scheme: dark)')?.matches) {
          store.setDarkModeEnabled();
          return;
        }
        if (!JSON.parse(<string>darkModeLocalStorage)) {
          store.setLightModeEnabled();
        } else {
          store.setDarkModeEnabled();
        }
      },
    }),
);
