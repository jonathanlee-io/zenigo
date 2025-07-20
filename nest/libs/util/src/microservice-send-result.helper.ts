import {MicroserviceSendResult} from '@app/dto';
import {HttpStatus} from '@nestjs/common';

class MicroserviceSendResultBuilder<TData> {
  private _status?: HttpStatus;
  private _data?: TData;
  private _errorMessage?: string;

  static ok<TData>(data: TData) {
    const builder = new MicroserviceSendResultBuilder();
    builder._status = HttpStatus.OK;
    builder._data = data;
    return builder.build() as MicroserviceSendResult<TData>;
  }

  static forbidden(): MicroserviceSendResult<null> {
    const builder = new MicroserviceSendResultBuilder();
    builder._status = HttpStatus.FORBIDDEN;
    builder._data = null;
    return builder.build() as MicroserviceSendResult<null>;
  }

  static notFound(): MicroserviceSendResult<null> {
    const builder = new MicroserviceSendResultBuilder();
    builder._status = HttpStatus.NOT_FOUND;
    builder._data = null;
    return builder.build() as MicroserviceSendResult<null>;
  }

  static status(status: HttpStatus) {
    const builder = new MicroserviceSendResultBuilder();
    builder._status = status;
    return builder;
  }

  data(data: TData) {
    this._data = data;
    return this;
  }

  errorMessage(errorMessage: string) {
    this._errorMessage = errorMessage;
    return this;
  }

  build(): MicroserviceSendResult<TData> {
    if (!this._status) {
      throw new Error('Status is required');
    }

    return {
      status: this._status,
      data: this._data,
      ...(this._errorMessage ? {errorMessage: this._errorMessage} : {}),
    };
  }
}

export {MicroserviceSendResultBuilder};
