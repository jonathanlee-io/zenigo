import {HttpStatus} from '@nestjs/common';

export interface MicroServiceControllerPayload<TData> {
  clientSubdomain: string;
  clientIp: string;
  data: TData;
}

export type AnonymousMicroserviceControllerPayload<TData> =
  MicroServiceControllerPayload<TData>;

export interface AuthenticatedMicroserviceControllerPayload<TData>
  extends MicroServiceControllerPayload<TData> {
  authenticatedUser: {
    id: string;
    email: string;
  };
}

export interface MicroserviceSendResult<TData> {
  status: HttpStatus;
  data: TData;
  errorMessage?: string;
}
