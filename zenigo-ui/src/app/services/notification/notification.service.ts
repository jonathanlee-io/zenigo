import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';

import {TenantStore} from '../../+state/tenant/tenant.store';
import {environment} from '../../../environments/environment';
import {NotificationDto} from '../../dtos/notifications/Notification.dto';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private readonly httpClient = inject(HttpClient);
  private readonly tenantStore = inject(TenantStore);

  getAllNotificationsForUser() {
    return this.httpClient.get<NotificationDto[]>(
        this.tenantStore.getFullRequestUrl(
            `${environment.NOTIFICATIONS_SERVICE_BASE_URL}/for-user`,
        ),
    );
  }

  acknowledgeAllNotificationsForUser() {
    return this.httpClient.patch<NotificationDto[]>(
        this.tenantStore.getFullRequestUrl(
            `${environment.NOTIFICATIONS_SERVICE_BASE_URL}/for-user`,
        ),
        {},
    );
  }

  deleteAllNotificationsForUser() {
    return this.httpClient.delete<NotificationDto[]>(
        this.tenantStore.getFullRequestUrl(
            `${environment.NOTIFICATIONS_SERVICE_BASE_URL}/for-user`,
        ),
    );
  }

  acknowledgeNotificationById(notificationId: string) {
    return this.httpClient.patch<NotificationDto>(
        this.tenantStore.getFullRequestUrl(
            `${environment.NOTIFICATIONS_SERVICE_BASE_URL}/${notificationId}`,
        ),
        {},
    );
  }

  deleteNotificationById(notificationId: string) {
    return this.httpClient.delete<NotificationDto>(
        this.tenantStore.getFullRequestUrl(
            `${environment.NOTIFICATIONS_SERVICE_BASE_URL}/${notificationId}`,
        ),
    );
  }
}
