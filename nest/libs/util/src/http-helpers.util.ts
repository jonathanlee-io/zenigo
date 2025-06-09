import {MicroserviceSendResult} from '@app/dto';
import {HttpException, HttpStatus} from '@nestjs/common';

export class HttpHelpersUtil {
  static async returnDataOrThrowError(
    microserviceResponse: MicroserviceSendResult<unknown>,
    desiredStatus: HttpStatus = HttpStatus.OK,
    returnedErrorMessage: string = 'Oops, something went wrong.',
    returnedErrorStatus: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR,
  ) {
    if (microserviceResponse.status !== desiredStatus) {
      throw new HttpException(
        microserviceResponse.errorMessage ?? returnedErrorMessage,
        returnedErrorStatus,
      );
    }
    return microserviceResponse.data;
  }
}
