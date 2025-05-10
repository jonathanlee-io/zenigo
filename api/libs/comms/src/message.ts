import {MicroserviceSendResult} from '@app/dto';

export interface Message<TPayload, TResponse> {
  payload: TPayload;
  response: MicroserviceSendResult<TResponse>;
}
