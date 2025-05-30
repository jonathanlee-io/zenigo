import {NgIf} from '@angular/common';
import {Component, computed, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {ConfirmationService} from 'primeng/api';
import {Button, ButtonDirective, ButtonIcon, ButtonLabel} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {InputText} from 'primeng/inputtext';
import {ProgressSpinner} from 'primeng/progressspinner';
import {Select} from 'primeng/select';

import {ProjectStore} from '../../../../+state/project/project.store';
import {RoutePath} from '../../../../app.routes';
import {rebaseRoutePathAsString} from '../../../../util/router/Router.utils';

export type PostTypeValue = 'update' | 'issue';

export interface PostType {
  name: string;
  value: PostTypeValue;
}

@Component({
  selector: 'app-project-actions-panel',
  imports: [
    NgIf,
    ProgressSpinner,
    ButtonDirective,
    ButtonIcon,
    RouterLink,
    ButtonLabel,
    Dialog,
    Button,
    InputText,
    Select,
    FormsModule,
  ],
  templateUrl: './project-actions-panel.component.html',
  styleUrl: './project-actions-panel.component.scss',
})
export class ProjectActionsPanelComponent {
  protected postType?: PostType;
  protected readonly projectStore = inject(ProjectStore);
  protected isCreatePostDialogVisible: boolean = false;
  private readonly postTypes = signal<PostType[]>([
    {
      name: 'Update',
      value: 'update',
    },
    {
      name: 'Issue',
      value: 'issue',
    },
  ]);
  protected readonly filteredPostTypes = computed(() => this.postTypes()
      .filter((postType) => {
        if (postType.value === 'update') {
          return !!this.projectStore.projectById()?.isOwnerUpdatesEnabled;
        }
        if (postType.value === 'issue') {
          return !!this.projectStore.projectById()?.isOwnerIssuesEnabled;
        }
        return true;
      },
      ));
  private readonly confirmationService = inject(ConfirmationService);


  getProductPath() {
    const projectById = this.projectStore.projectById();
    if (!projectById) {
      return;
    }
    return rebaseRoutePathAsString(RoutePath.PRODUCT_PAGE.replace(':subdomain', projectById.subdomains?.[0]?.subdomain));
  }

  promptDeleteProject() {
    const projectById = this.projectStore.projectById();
    if (!projectById) {
      return;
    }
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${projectById.name} permanently?`,
      acceptButtonStyleClass: 'p-button-danger',
      acceptIcon: 'pi pi-trash',
      rejectIcon: 'pi pi-times',
      closable: false,
      accept: () =>
        this.projectStore.deleteProjectById(projectById.id),
    });
  }

  isOwnerPostsEnabled() {
    return this.projectStore.projectById()?.isOwnerUpdatesEnabled || this.projectStore.projectById()?.isOwnerIssuesEnabled;
  }
}
