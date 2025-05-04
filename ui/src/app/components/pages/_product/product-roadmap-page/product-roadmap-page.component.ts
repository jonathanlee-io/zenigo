import {Component, inject, OnDestroy, OnInit, signal} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Divider} from 'primeng/divider';
import {Subscription, tap} from 'rxjs';

import {RoutePath} from '../../../../app.routes';
import {rebaseRoutePathAsString} from '../../../../util/router/Router.utils';
import {
  ProductRoadmapBoardComponent,
} from '../../../lib/_product/product-roadmap-board/product-roadmap-board.component';


@Component({
  selector: 'app-product-roadmap-page',
  imports: [
    ProductRoadmapBoardComponent,
    Divider,
    RouterLink,
  ],
  templateUrl: './product-roadmap-page.component.html',
  styleUrl: './product-roadmap-page.component.scss',
})
export class ProductRoadmapPageComponent implements OnInit, OnDestroy {
  protected readonly subdomain = signal<string>('');
  protected readonly rebaseRoutePathAsString = rebaseRoutePathAsString;
  protected readonly RoutePath = RoutePath;
  private readonly route = inject(ActivatedRoute);
  private routeParamsSubscription?: Subscription;

  ngOnInit() {
    this.routeParamsSubscription = this.route.params.pipe(
        tap((params) => {
          this.subdomain.set(params['subdomain']);
        }),
    ).subscribe();
  }

  ngOnDestroy() {
    this.routeParamsSubscription?.unsubscribe();
  }
}
