import {Routes} from '@angular/router';

import {
  CreateClientIntroPageComponent,
} from './components/pages/_authenticated/_create_client_pages/create-client-intro-page/create-client-intro-page.component';
import {
  CreateProjectPageComponent,
} from './components/pages/_authenticated/_create_client_pages/create-project-page/create-project-page.component';
import {
  ClientDashboardComponent,
} from './components/pages/_authenticated/_dashboard/client-dashboard/client-dashboard.component';
import {
  MainDashboardComponent,
} from './components/pages/_authenticated/_dashboard/main-dashboard/main-dashboard.component';
import {
  OrgDashboardCreateProjectPageComponent,
} from './components/pages/_authenticated/_dashboard/org-dashboard-create-project-page/org-dashboard-create-project-page.component';
import {
  ProjectDashboardPageComponent,
} from './components/pages/_authenticated/_dashboard/project-dashboard-page/project-dashboard-page.component';
import {
  SettingsPageComponent,
} from './components/pages/_authenticated/_manage_settings_pages/settings-page/settings-page.component';
import {LoginPageComponent} from './components/pages/_login_register_pages/login-page/login-page.component';
import {RegisterPageComponent} from './components/pages/_login_register_pages/register-page/register-page.component';
import {ProductPageComponent} from './components/pages/_product/product-page/product-page.component';
import {
  ProductRoadmapPageComponent,
} from './components/pages/_product/product-roadmap-page/product-roadmap-page.component';
import {LandingPageComponent} from './components/pages/landing-page/landing-page.component';
import {LoginSuccessComponent} from './components/pages/login-success/login-success.component';
import {authGuard} from './guards/auth.guard';
import {reverseAuthGuard} from './guards/reverse-auth.guard';

export enum RoutePath {
  /* ANONYMOUS ROUTES */
  LANDING_PAGE = '',
  LOGIN = 'login',
  REGISTER = 'register',
  /* ERROR ROUTES */
  ERROR_NOT_FOUND = 'error/not-found',
  /* TRANSITION ROUTES */
  LOGIN_SUCCESS = 'login-success',
  /* PUBLIC ROUTES */
  PRODUCT_PAGE = 'product/:subdomain',
  PRODUCT_ROADMAP = 'product/:subdomain/roadmap',
  /* AUTHENTICATED ROUTES */
  CREATE_CLIENT_INTRO = 'create/client/intro',
  CREATE_PROJECT_INTRO = 'create/first-project',
  SETTINGS_PAGE = 'manage/settings',
  DASHBOARD = 'dashboard',
  CREATE_PROJECT = 'create/project/:clientId',
  CLIENT_DASHBOARD = 'dashboard/client/:clientId',
  PROJECT_DASHBOARD = 'dashboard/project/:projectId',
}

export const routes: Routes = [
  /* ANONYMOUS ROUTES */
  {
    path: RoutePath.LANDING_PAGE,
    component: LandingPageComponent,
    canActivate: [reverseAuthGuard],
  },
  {
    path: RoutePath.LOGIN,
    component: LoginPageComponent,
    canActivate: [reverseAuthGuard],
  },
  {
    path: RoutePath.REGISTER,
    component: RegisterPageComponent,
    canActivate: [reverseAuthGuard],
  },
  /* TRANSITION ROUTES */
  {
    path: RoutePath.LOGIN_SUCCESS,
    component: LoginSuccessComponent,
  },
  /* PUBLIC ROUTES */
  {
    path: RoutePath.PRODUCT_PAGE,
    component: ProductPageComponent,
  },
  {
    path: RoutePath.PRODUCT_ROADMAP,
    component: ProductRoadmapPageComponent,
  },
  /* AUTHENTICATED ROUTES */
  {
    path: RoutePath.CREATE_CLIENT_INTRO,
    component: CreateClientIntroPageComponent,
    canActivate: [authGuard],
  },
  {
    path: RoutePath.CREATE_PROJECT_INTRO,
    component: CreateProjectPageComponent,
    canActivate: [authGuard],
  },
  {
    path: RoutePath.SETTINGS_PAGE,
    component: SettingsPageComponent,
    canActivate: [authGuard],
  },
  {
    path: RoutePath.DASHBOARD,
    component: MainDashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: RoutePath.CREATE_PROJECT,
    component: OrgDashboardCreateProjectPageComponent,
    canActivate: [authGuard],
  },
  {
    path: RoutePath.CLIENT_DASHBOARD,
    component: ClientDashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: RoutePath.PROJECT_DASHBOARD,
    component: ProjectDashboardPageComponent,
    canActivate: [authGuard],
  },
];
