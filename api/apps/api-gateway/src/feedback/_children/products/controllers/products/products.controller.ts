import {CurrentUser, CurrentUserDto, IsPublic} from '@app/auth';
import {IdParamDto} from '@app/validation';
import {Body, Controller, Get, Ip, Param, Post, Query} from '@nestjs/common';
import {DateTime} from 'luxon';

import {SubmitProductFeedbackRequestDto} from '../../../../../../../feedback-service/src/app/products/dto/SubmitProductFeedbackRequest.dto';
import {ProductsService} from '../../services/products/products.service';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @IsPublic()
  @Post('feedback')
  async receiveFeedback(
    @CurrentUser() {clientSubdomain}: CurrentUserDto,
    @Body()
    {
      userFeedback,
      widgetMetadataType,
      widgetMetadataUrl,
      widgetMetadataTimezone,
    }: SubmitProductFeedbackRequestDto,
    @Ip() ip: string,
  ) {
    return this.productsService.submitProductFeedback(
      {clientSubdomain, ip, submittedAt: DateTime.now().toISO()},
      {
        userFeedback,
        widgetMetadataType,
        widgetMetadataUrl,
        widgetMetadataTimezone,
      },
    );
  }

  @IsPublic()
  @Get('config')
  async getProductConfig(@CurrentUser() {clientSubdomain}: CurrentUserDto) {
    return this.productsService.getProductConfig(clientSubdomain);
  }

  @Get('feedback/:id')
  async getFeedbackForProductById(
    @CurrentUser() {requestingUserId}: CurrentUserDto,
    @Param() {id: projectId}: IdParamDto,
    @Query() {limit, offset}: {limit: number; offset: number},
  ) {
    return this.productsService.getProductFeedbackForProjectId(
      requestingUserId,
      projectId,
      limit,
      offset,
    );
  }
}
