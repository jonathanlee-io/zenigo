import {inject} from '@angular/core';
import {Router} from '@angular/router';
import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {DateTime} from 'luxon';
import {catchError, take, tap, throwError} from 'rxjs';

import {RoutePath} from '../../app.routes';
import {CreateProjectDto} from '../../dtos/projects/CreateProject.dto';
import {ProductFeedbackSubmissionDto} from '../../dtos/projects/ProductFeedbackSubmissionDto';
import {ProjectDto} from '../../dtos/projects/Project.dto';
import {ProjectsService} from '../../services/projects/projects.service';
import {rebaseRoutePathAsString, RouterUtils} from '../../util/router/Router.utils';
import {ToastStore} from '../toast/toast.store';

export type ProjectState = {
  isLoading: boolean;
  isFeedbackLoading: boolean;
  projectById: ProjectDto | null;
  projectsWhereInvolved: ProjectDto[];
  projectsForClient: ProjectDto[];
  productFeedbackSubmissions: (ProductFeedbackSubmissionDto & {serverResponseTime: string})[];
  productFeedbackSubmissionsOffset: number;
  productFeedbackSubmissionsTotal: number;
};

const initialState: ProjectState = {
  isLoading: false,
  isFeedbackLoading: false,
  projectById: null,
  projectsWhereInvolved: [],
  projectsForClient: [],
  productFeedbackSubmissions: [],
  productFeedbackSubmissionsOffset: 0,
  productFeedbackSubmissionsTotal: 0,
};

export const ProductFeedbackSubmissionsOffsetKey = 'productFeedbackSubmissionsOffset';

export const ProjectStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods((store) => {
      const projectsService = inject(ProjectsService);
      const router = inject(Router);
      const toastStore = inject(ToastStore);
      return {
        loadProjectsWhereInvolved: async () => new Promise<ProjectDto[]>((resolve, reject) => {
          patchState(store, {isLoading: true});
          projectsService.fetchProjectsWhereInvolved()
              .pipe(
                  take(1),
                  tap((projectsWhereInvolved) => {
                    patchState(store, {isLoading: false, projectsWhereInvolved: [...projectsWhereInvolved]});
                    resolve(projectsWhereInvolved);
                  }),
                  catchError((err) => {
                    patchState(store, {...initialState});
                    reject(err);
                    return throwError(() => err);
                  }),
              ).subscribe();
        }),
        loadProjectsForClient: (clientId: string) => {
          patchState(store, {isLoading: true});
          projectsService.fetchProjectsForClient(clientId)
              .pipe(
                  take(1),
                  tap((projectsForClient) => {
                    patchState(store, {isLoading: false, projectsForClient: [...projectsForClient]});
                  }),
                  catchError((err) => {
                    patchState(store, {...initialState});
                    return throwError(() => err);
                  }),
              ).subscribe();
        },
        loadProjectById: (projectId: string) => {
          patchState(store, {isLoading: true});
          projectsService.fetchProjectById(projectId)
              .pipe(
                  take(1),
                  tap((projectById) => {
                    patchState(store, {isLoading: false, projectById: {...projectById}});
                  }),
                  catchError((err) => {
                    patchState(store, {...initialState});
                    return throwError(() => err);
                  }),
              ).subscribe();
        },
        setProductFeedbackSubmissionsOffset: (offset: number) => {
          patchState(store, {productFeedbackSubmissionsOffset: offset});
          localStorage.setItem('productFeedbackSubmissionsOffset', offset.toString());
        },
        loadProductFeedbackByProjectId: (projectId: string) => {
          patchState(store, {isFeedbackLoading: true, productFeedbackSubmissionsOffset:
              (localStorage.getItem(ProductFeedbackSubmissionsOffsetKey) ?
                Number(localStorage.getItem(ProductFeedbackSubmissionsOffsetKey)) :
                0),
          });
          projectsService.fetchProductFeedbackForProjectById(projectId, store.productFeedbackSubmissionsOffset())
              .pipe(
                  take(1),
                  tap((productFeedbackSubmissions) => {
                    patchState(store, {
                      isFeedbackLoading: false,
                      productFeedbackSubmissionsTotal: productFeedbackSubmissions.total,
                      productFeedbackSubmissions: [
                        ...productFeedbackSubmissions.rows.map((submission) => ({
                          ...submission,
                          serverResponseTime: String(Math.abs(DateTime
                              .fromJSDate(new Date(submission.submittedAt))
                              .diff(
                                  DateTime.fromJSDate(new Date(submission.createdAt)),
                                  ['years', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'],
                              ).toMillis())),
                        }))]});
                  }),
                  catchError((err) => {
                    patchState(store, {...initialState});
                    return throwError(() => err);
                  }),
              ).subscribe();
        },
        updateProjectById: (projectId: string, project: ProjectDto) => {
          patchState(store, {isLoading: true});
          projectsService.updateProjectById(projectId, project)
              .pipe(
                  take(1),
                  tap((updatedProject) => {
                    patchState(store, {projectById: {...updatedProject}, isLoading: false});
                  }),
              ).subscribe();
        },
        deleteProjectById: (projectId: string) => {
          patchState(store, {isLoading: true});
          projectsService.deleteProjectById(projectId)
              .pipe(
                  take(1),
                  tap((deletedProject) => {
                    patchState(store, {
                      projectById: null,
                      projectsWhereInvolved: [...store.projectsWhereInvolved().filter((project) => project.id !== deletedProject.id)],
                      isLoading: false,
                    });
                    toastStore.createToast({
                      severity: 'success',
                      summary: 'Project Deletion',
                      detail: `Project ${deletedProject.name} has been deleted successfully.`,
                    });
                    router.navigate([rebaseRoutePathAsString(RoutePath.CLIENT_DASHBOARD.replace(':clientId', deletedProject.clientId))])
                        .catch(RouterUtils.navigateCatchErrorCallback);
                  }),
                  catchError(() => {
                    patchState(store, {isLoading: false});
                    return throwError(() => 'Failed to delete project');
                  }),
              ).subscribe();
        },
        createProjectForExistingClient: (clientId: string, project: CreateProjectDto) => {
          patchState(store, {isLoading: true});
          projectsService.createProjectForExistingClient(clientId, project)
              .pipe(
                  take(1),
                  tap((createdProject) => {
                    patchState(store, {
                      isLoading: false,
                      projectById: {...createdProject},
                    });
                    router.navigate([rebaseRoutePathAsString(RoutePath.CLIENT_DASHBOARD.replace(':clientId', clientId))])
                        .catch(RouterUtils.navigateCatchErrorCallback);
                  }),
              ).subscribe();
        },
      };
    }),
);
