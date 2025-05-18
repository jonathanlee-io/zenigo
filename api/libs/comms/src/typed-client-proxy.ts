import {Message} from '@app/comms/message';
import {ClientProxy} from '@nestjs/microservices';
import {firstValueFrom} from 'rxjs';

export type AnyMessageContract<TKey extends string> = Record<
  TKey,
  Message<any, any>
>;

export class TypedClientProxy<
  TKey extends string,
  TContract extends AnyMessageContract<TKey>,
> {
  constructor(private readonly clientProxy: ClientProxy) {}

  async sendAsync<K extends keyof TContract>(
    pattern: K,
    payload: TContract[K]['payload'],
  ): Promise<TContract[K]['response']> {
    return firstValueFrom(
      this.clientProxy.send<TContract[K]['response'], TContract[K]['payload']>(
        pattern,
        payload,
      ),
    );
  }

  emit<K extends keyof TContract>(
    pattern: K,
    payload: TContract[K]['payload'],
  ): void {
    this.clientProxy.emit<TContract[K]['response'], TContract[K]['payload']>(
      pattern,
      payload,
    );
  }
}
