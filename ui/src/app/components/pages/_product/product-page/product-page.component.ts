import {NgIf} from '@angular/common';
import {Component, computed, inject, OnDestroy, OnInit, signal} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {Divider} from 'primeng/divider';
import {Subscription, tap} from 'rxjs';

import {RoutePath} from '../../../../app.routes';
import {ProductPostDto} from '../../../../dtos/projects/ProductPostDto';
import {rebaseRoutePath, rebaseRoutePathAsString} from '../../../../util/router/Router.utils';
import {ProductPostComponent} from '../../../lib/_product/product-post/product-post.component';

export type TabValue = 'updates' | 'issues';

@Component({
  selector: 'app-product-page',
  imports: [
    ProductPostComponent,
    Divider,
    RouterLink,
    NgIf,
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent implements OnInit, OnDestroy {
  posts = signal<ProductPostDto[]>([
    {
      id: '1',
      title: 'Upcoming Dark Mode Support',
      summary: 'We heard your requests! Dark mode is in development and will be released next quarter to make browsing easier on the eyes.',
      upVotes: 120,
      comments: 45,
      type: 'update',
    },
    {
      id: '2',
      title: 'New AI-Powered Content Recommendations',
      summary: 'Introducing a smarter browsing experience with AI-powered recommendations tailored to your interests.',
      upVotes: 89,
      comments: 30,
      type: 'update',
    },
    {
      id: '4',
      title: 'Enhanced User Dashboard',
      summary: 'A complete overhaul of the user dashboard with easier navigation and advanced analytics to better track your progress.',
      upVotes: 132,
      comments: 25,
      type: 'update',
    },
    {
      id: '4',
      title: 'Light Mode Unreadable in Some Pages',
      summary: 'A complete overhaul of the light mode color is underway in order to make the site more readable in light mode.',
      upVotes: 132,
      comments: 25,
      type: 'issue',
    },
  ]);
  updates = computed(() => this.posts().filter((post) => post.type === 'update'));
  issues = computed(() => this.posts().filter((post) => post.type === 'issue'));
  protected activeTab = signal<TabValue>('updates');
  protected readonly route = inject(ActivatedRoute);
  protected readonly rebaseRoutePath = rebaseRoutePath;
  protected readonly RoutePath = RoutePath;
  protected readonly rebaseRoutePathAsString = rebaseRoutePathAsString;
  protected readonly subdomain = signal<string>('');
  private readonly router = inject(Router);
  private routeParamsSubscription?: Subscription;
  private queryParamsSubscription?: Subscription;
  private activeTabSubscription?: Subscription;

  constructor() {
    this.activeTabSubscription = toObservable(this.activeTab).pipe(
        tap(async (tab) => {
          await this.router.navigate([], {queryParams: {tab}, replaceUrl: true});
        }),
    ).subscribe();
  }

  ngOnInit() {
    this.routeParamsSubscription = this.route.params.pipe(
        tap((params) => {
          this.subdomain.set(params['subdomain']);
        }),
    ).subscribe();
    this.queryParamsSubscription = this.route.queryParams.pipe(
        tap((params) => {
          if (params['tab']) {
            this.activeTab.set(params['tab']);
          }
        }),
    ).subscribe();
  }

  ngOnDestroy() {
    this.routeParamsSubscription?.unsubscribe();
    this.queryParamsSubscription?.unsubscribe();
    this.activeTabSubscription?.unsubscribe();
  }
}
