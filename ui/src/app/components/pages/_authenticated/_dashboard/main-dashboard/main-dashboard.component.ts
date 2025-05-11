import {NgClass, NgIf} from '@angular/common';
import {Component, computed, inject, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {DataViewModule} from 'primeng/dataview';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {RatingModule} from 'primeng/rating';
import {TableModule} from 'primeng/table';
import {TagModule} from 'primeng/tag';

import {ProjectStore} from '../../../../../+state/project/project.store';
import {RoutePath} from '../../../../../app.routes';
import {rebaseRoutePath, rebaseRoutePathAsString} from '../../../../../util/router/Router.utils';

@Component({
  selector: 'app-main-dashboard',
  imports: [
    DataViewModule,
    TagModule,
    ButtonModule,
    TableModule,
    RatingModule,
    FormsModule,
    RouterLink,
    NgIf,
    ProgressSpinnerModule,
    NgClass,
  ],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss',
})
export class MainDashboardComponent implements OnInit {
  protected readonly projectStore = inject(ProjectStore);
  getActiveFeatureCount = computed(() => this.projectStore.projectsWhereInvolved().length);
  protected readonly rebaseRoutePath = rebaseRoutePath;
  protected readonly rebaseRoutePathAsString = rebaseRoutePathAsString;
  protected readonly RoutePath = RoutePath;

  ngOnInit() {
    this.projectStore.loadProjectsWhereInvolved()
        .catch((error) => {
          console.error(error);
        });
  }

  commaListSubdomains(subdomains: {subdomain: string}[]) {
    return subdomains.map((subdomain) => subdomain.subdomain).join(' , ');
  }
}
